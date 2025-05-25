"use server"

import prisma from "@/lib/prisma"
import { verifyToken } from "./user"

export const getBookingList = async (token: string) => {
	try {
		const decoded = await verifyToken(token);

		if (!decoded.userId) {
			return { bookings: null, error: "Error fetching user data" }
		}


		const bookings = await prisma.booking.findMany({
			where: {
				mentor: { userId: decoded.userId },
			},
			include: { client: { include: { user: true } }, mentor: false }
		});

		return { bookings, error: "" }
	} catch (error) {
		console.error(error)
		return { bookings: null, error: "Error fetching booking list" }
	}
}