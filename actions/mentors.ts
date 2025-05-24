"use server"

import prisma from "@/lib/prisma";

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

export const getMentor = async (id: string) => {
	try {
		const mentor = await prisma.mentor.findUnique({
			where: { id: parseInt(id) },
			include: {
				user: {
					select: {
						firstName: true,
						lastName: true,
						profilePicture: true,
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
