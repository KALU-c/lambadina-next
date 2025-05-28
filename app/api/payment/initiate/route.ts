import { NextResponse } from 'next/server'
import axios from 'axios'
// import { PrismaClient } from '@prisma/client'
import prisma from '@/lib/prisma'

// const prisma = new PrismaClient()

export async function POST(request: Request) {
	try {
		const body = await request.json()

		// Validate input data
		if (!body.meta?.client_user_id || !body.meta?.mentor_id) {
			return NextResponse.json(
				{ error: 'Missing required fields: client_user_id and mentor_id are required' },
				{ status: 400 }
			)
		}

		const clientUserId = parseInt(body.meta.client_user_id)
		const mentorId = parseInt(body.meta.mentor_id)

		if (isNaN(clientUserId) || isNaN(mentorId)) {
			return NextResponse.json(
				{ error: 'Invalid ID format: client_user_id and mentor_id must be numbers' },
				{ status: 400 }
			)
		}

		// Verify client exists
		const clientExists = await prisma.user.findUnique({
			where: { id: clientUserId }
		})

		if (!clientExists) {
			return NextResponse.json(
				{ error: 'Client not found. Please register as a client first.' },
				{ status: 404 }
			)
		}

		// Verify mentor exists
		const mentorExists = await prisma.mentor.findUnique({
			where: { id: mentorId }
		})

		if (!mentorExists) {
			return NextResponse.json(
				{ error: 'Mentor not found' },
				{ status: 404 }
			)
		}

		// Validate amount
		const amount = parseFloat(body.amount)
		if (isNaN(amount) || amount <= 0) {
			return NextResponse.json(
				{ error: 'Invalid payment amount' },
				{ status: 400 }
			)
		}

		// Create a pending booking
		const pendingBooking = await prisma.booking.create({
			data: {
				sessionDate: new Date(),
				startTime: new Date(),
				endTime: new Date(),
				durationMinutes: 30,
				callType: body.meta.pricing_type || 'video', // default to video if not specified
				status: 'PENDING',
				amountPaid: amount,
				platformFee: 0,
				mentorPayout: 0,
				paymentStatus: false,
				client: { connect: { userId: clientUserId } },
				mentor: { connect: { id: mentorId } },
				payment: {
					create: {
						txRef: body.tx_ref,
						amount: amount,
						currency: body.currency || 'ETB',
						status: 'initiated',
						chapaTransactionRef: '',
					}
				}
			},
			include: {
				mentor: true,
				client: true
			}
		})

		// Then send payment request to Chapa
		const response = await axios.post(
			'https://api.chapa.co/v1/transaction/initialize',
			{
				...body,
				tx_ref: body.tx_ref,
				customization: {
					title: "Mentorship",
					description: `Booking ${body.meta.pricing_type} session with ${body.meta.mentor_name}`
				}
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${process.env.CHAPA_SECRET_KEY}`
				},
			}
		)

		return NextResponse.json({
			message: 'Payment initiated successfully',
			chapaResponse: response?.data,
			booking: pendingBooking
		})

	} catch (error: any) {
		console.error('Full error details:', error)

		// Handle Prisma specific errors
		if (error.code === 'P2025') {
			return NextResponse.json(
				{ error: `Database record not found: ${error.meta?.cause}` },
				{ status: 400 }
			)
		}

		// Handle Axios errors
		if (error.isAxiosError) {
			return NextResponse.json(
				{
					error: 'Payment gateway error',
					details: error.response?.data || error.message
				},
				{ status: error.response?.status || 500 }
			)
		}

		// Generic error handling
		return NextResponse.json(
			{
				error: 'Internal server error',
				details: error.message
			},
			{ status: 500 }
		)
	}
}