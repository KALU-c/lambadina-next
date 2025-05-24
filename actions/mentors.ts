"use server"

import prisma from "@/lib/prisma";
import { verifyToken } from "./user";

export const getMentors = async () => {
	try {
		const mentors = await prisma.mentor.findMany({
			select: {
				id: true,
				user: {
					select: {
						id: true,
						username: true,
						email: true,
						firstName: true,
						lastName: true,
						phoneNumber: true,
						userType: true,
						profilePicture: true,
						isVerified: true
					}
				},
				bio: true,
				categories: {
					select: {
						id: true,
						name: true,
						description: true,
						createdAt: true
					}
				},
				pricePerMinute: true,
				isAvailable: true,
				rating: true,
				totalSessions: true,
				availabilities: {
					select: {
						id: true,
						dayOfWeek: true,
						startTime: true,
						endTime: true,
						isAvailable: true,
						mentorId: true
					}
				},
				createdAt: true,
				updatedAt: true
			}
		});

		console.log(mentors);
		return { mentors, error: "" }
	} catch (error) {
		console.log(error);
		return { mentors: [], error: "Error fetching mentors" }
	}
}

export const getMentor = async (id: string, token?: string) => {
	try {
		if (token) {
			verifyToken(token);
		}

		const mentor = await prisma.mentor.findUnique({
			where: { id: parseInt(id) },
			include: {
				user: {
					select: {
						firstName: true,
						lastName: true,
						profilePicture: true,
						phoneNumber: true,
						username: true,
						email: true
					}
				}
			}
		});
		return { mentor, error: "" };
	} catch (error) {
		console.error(error);
		return { mentor: null, error: "Error fetching mentor detail" };
	}
};


// export const updateMentor = async (token: string, formData: FormData) => {
// 	try {
// 		const decoded = await verifyToken(token);

// 		// Parse formData into separate userData and mentorData objects
// 		const userData: any = {};
// 		const mentorData: any = {};

// 		formData.forEach((value, key) => {
// 			if (key.startsWith("user[")) {
// 				// extract the field inside brackets, e.g. user[firstName] -> firstName
// 				const userKey = key.match(/^user\[(.+)\]$/)?.[1];
// 				if (userKey) {
// 					userData[userKey] = value;
// 				}
// 			} else {
// 				// non-user fields go to mentor
// 				mentorData[key] = value;
// 			}
// 		});

// 		// Convert data types as needed
// 		if (mentorData.pricePerMinute !== undefined) {
// 			mentorData.pricePerMinute = parseFloat(mentorData.pricePerMinute as string);
// 		}
// 		if (mentorData.isAvailable !== undefined) {
// 			mentorData.isAvailable = mentorData.isAvailable === "true";
// 		}
// 		// Add more conversions as needed...

// 		// Start a transaction to update both User and Mentor atomically
// 		const updatedMentor = await prisma.$transaction(async (tx) => {
// 			// Update User
// 			const updatedUser = await tx.user.update({
// 				where: { id: decoded.userId },
// 				data: userData,
// 				select: {
// 					id: true,
// 					firstName: true,
// 					lastName: true,
// 					username: true,
// 					email: true,
// 					phoneNumber: true,
// 					userType: true,
// 					profilePicture: true,
// 					isVerified: true,
// 				},
// 			});

// 			// Update Mentor by userId
// 			const updatedMentor = await tx.mentor.update({
// 				where: { userId: decoded.userId },
// 				data: mentorData,
// 				select: {
// 					id: true,
// 					bio: true,
// 					pricePerMinute: true,
// 					isAvailable: true,
// 					rating: true,
// 					totalSessions: true,
// 					createdAt: true,
// 					updatedAt: true,
// 					userId: true,
// 					user: { // Include updated user data nested
// 						select: {
// 							id: true,
// 							firstName: true,
// 							lastName: true,
// 							username: true,
// 							email: true,
// 							phoneNumber: true,
// 							userType: true,
// 							profilePicture: true,
// 							isVerified: true,
// 						},
// 					},
// 				},
// 			});

// 			return updatedMentor;
// 		});

// 		return { mentor: updatedMentor, error: "" };
// 	} catch (error) {
// 		console.error(error);
// 		return { mentor: null, error: "Failed to update mentor profile." };
// 	}
// };

