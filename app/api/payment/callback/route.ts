import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { headers } from 'next/headers';
import crypto from 'crypto';

const prisma = new PrismaClient();
const CHAPA_WEBHOOK_SECRET = process.env.CHAPA_WEBHOOK_SECRET || '';

export async function POST(request: Request) {
	try {
		// Verify the webhook signature
		const headersList = await headers();
		const chapaSignature = headersList.get('chapa-signature');
		const body = await request.text();

		if (!verifyChapaSignature(body, chapaSignature)) {
			return NextResponse.json(
				{ error: 'Invalid webhook signature' },
				{ status: 401 }
			);
		}

		const payload = JSON.parse(body);
		const { tx_ref, status, amount } = payload;

		// Only process successful payments
		if (status !== 'success') {
			return NextResponse.json(
				{ message: `Payment status is ${status}, no action taken` },
				{ status: 200 }
			);
		}

		// Verify the payment with Chapa API
		const verificationResponse = await verifyPayment(tx_ref);

		if (!verificationResponse || verificationResponse.status !== 'success') {
			return NextResponse.json(
				{ error: 'Payment verification failed' },
				{ status: 400 }
			);
		}

		// Check if payment already exists
		const existingPayment = await prisma.payment.findUnique({
			where: { txRef: tx_ref },
		});

		// if (existingPayment) {
		//   return NextResponse.json(
		//     { message: 'Payment already processed' },
		//     { status: 200 }
		//   );
		// }

		// // Extract meta data from verification response
		const meta = verificationResponse.meta || {};


		// Find the payment by txRef
		// const existingPayment = await prisma.payment.findUnique({
		//   where: { txRef: tx_ref },
		// });

		let booking;

		if (existingPayment) {
			// Update existing booking
			booking = await prisma.booking.update({
				where: { id: existingPayment.bookingId },
				data: {
					status: 'CONFIRMED',
					amountPaid: parseFloat(amount),
					platformFee: parseFloat(amount) * 0.2,
					mentorPayout: parseFloat(amount) * 0.8,
					paymentStatus: true,
				},
				include: { mentor: true, client: true },
			});
		} else {
			// Create a new booking and payment together
			booking = await prisma.booking.create({
				data: {
					sessionDate: new Date(),
					startTime: new Date(),
					endTime: new Date(Date.now() + 60 * 60 * 1000),
					durationMinutes: 60,
					callType: meta.session_type || 'BASIC',
					status: 'CONFIRMED',
					amountPaid: parseFloat(amount),
					platformFee: parseFloat(amount) * 0.2,
					mentorPayout: parseFloat(amount) * 0.8,
					paymentStatus: true,
					client: { connect: { userId: parseInt(meta.client_user_id) } },
					mentor: { connect: { id: parseInt(meta.mentor_id) } },
					payment: {
						create: {
							txRef: tx_ref,
							amount: parseFloat(amount),
							currency: 'ETB',
							status: 'success',
							chapaTransactionRef: verificationResponse.tx_ref || tx_ref,
						},
					},
				},
				include: { mentor: true, client: true },
			});
		}

		// Update mentor and client stats
		await prisma.$transaction([
			prisma.mentor.update({
				where: { id: booking.mentorId },
				data: { totalSessions: { increment: 1 } },
			}),
			prisma.client.update({
				where: { id: booking.clientId },
				data: { totalSessions: { increment: 1 } },
			}),
		]);

		return NextResponse.json(
			{ message: 'Payment processed successfully', booking },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Payment callback error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}

function verifyChapaSignature(rawBody: string, signature: string | null): boolean {
	if (!signature || !CHAPA_WEBHOOK_SECRET) return false;

	const hmac = crypto.createHmac('sha256', CHAPA_WEBHOOK_SECRET)
		.update(rawBody)
		.digest('hex');

	return hmac === signature;
}

async function verifyPayment(tx_ref: string) {
	try {
		const response = await fetch(
			`https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		);

		if (!response?.ok) {
			throw new Error(`Chapa API error: ${response?.statusText}`);
		}

		return await response?.json();
	} catch (error) {
		console.error('Payment verification failed:', error);
		return null;
	}
}

export const config = {
	api: {
		bodyParser: false,
	},
};