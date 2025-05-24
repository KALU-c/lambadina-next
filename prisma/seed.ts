import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
	// Clear existing data in correct order (due to foreign keys)
	await prisma.userUserPermission.deleteMany();
	await prisma.userGroup.deleteMany();
	await prisma.bookingReview.deleteMany();
	await prisma.payment.deleteMany();
	await prisma.booking.deleteMany();
	await prisma.mentorAvailability.deleteMany();
	await prisma.mentorCategory.deleteMany();
	await prisma.category.deleteMany();
	await prisma.client.deleteMany();
	await prisma.mentor.deleteMany();
	await prisma.user.deleteMany();

	// Seed categories and capture their full records (with IDs)
	const categories = await Promise.all([
		prisma.category.create({ data: { name: "Business Coaching", description: "Mentorship for entrepreneurs", createdAt: new Date() } }),
		prisma.category.create({ data: { name: "Software Engineering", description: "Full-stack dev and systems design", createdAt: new Date() } }),
		prisma.category.create({ data: { name: "Design & UX", description: "Product and experience design", createdAt: new Date() } }),
	]);

	// Create mentors and clients
	for (let i = 0; i < 5; i++) {
		const mentorUser = await prisma.user.create({
			data: {
				username: faker.internet.username(),
				password: faker.internet.password(),
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phoneNumber: faker.phone.number(),
				profilePicture: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&face&sig=${i}`,
				userType: "mentor",
				isVerified: true,
				createdAt: new Date(),
			},
		});

		const mentor = await prisma.mentor.create({
			data: {
				bio: faker.lorem.sentences(2),
				pricePerMinute: parseFloat(faker.finance.amount({ min: 1, max: 5, dec: 2 })),
				isAvailable: true,
				rating: faker.number.float({ min: 4, max: 5 }),
				totalSessions: faker.number.int({ min: 5, max: 50 }),
				createdAt: new Date(),
				updatedAt: new Date(),
				userId: mentorUser.id,
			},
		});

		// Assign a category to mentor using actual category IDs
		await prisma.mentorCategory.create({
			data: {
				mentorId: mentor.id,
				categoryId: categories[i % categories.length].id,
			},
		});

		// Mentor availabilities
		await prisma.mentorAvailability.createMany({
			data: [
				{
					dayOfWeek: 1,
					startTime: new Date("2025-05-24T08:00:00Z"),
					endTime: new Date("2025-05-24T10:00:00Z"),
					isAvailable: true,
					mentorId: mentor.id,
				},
				{
					dayOfWeek: 3,
					startTime: new Date("2025-05-24T14:00:00Z"),
					endTime: new Date("2025-05-24T16:00:00Z"),
					isAvailable: true,
					mentorId: mentor.id,
				},
			],
		});

		// Create client for each mentor
		const clientUser = await prisma.user.create({
			data: {
				username: faker.internet.username(),
				password: faker.internet.password(),
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phoneNumber: faker.phone.number(),
				profilePicture: `https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80&portrait&sig=${i + 10}`,
				userType: "client",
				isVerified: true,
				createdAt: new Date(),
			},
		});

		const client = await prisma.client.create({
			data: {
				interests: faker.lorem.words(3),
				totalSessions: faker.number.int({ min: 1, max: 20 }),
				createdAt: new Date(),
				updatedAt: new Date(),
				userId: clientUser.id,
			},
		});

		// Create a booking between this mentor and client
		const booking = await prisma.booking.create({
			data: {
				sessionDate: new Date(),
				startTime: new Date(),
				endTime: new Date(new Date().getTime() + 30 * 60000),
				durationMinutes: 30,
				callType: "video",
				status: "completed",
				amountPaid: 20,
				platformFee: 2,
				mentorPayout: 18,
				paymentStatus: true,
				callLink: "https://example.com/call",
				createdAt: new Date(),
				updatedAt: new Date(),
				clientId: client.id,
				mentorId: mentor.id,
			},
		});

		// Add payment for booking
		await prisma.payment.create({
			data: {
				txRef: faker.string.uuid(),
				amount: 20,
				currency: "USD",
				status: "successful",
				chapaTransactionRef: faker.string.uuid(),
				createdAt: new Date(),
				updatedAt: new Date(),
				bookingId: booking.id,
			},
		});

		// Add review for booking
		await prisma.bookingReview.create({
			data: {
				rating: faker.number.int({ min: 4, max: 5 }),
				comment: faker.lorem.sentence(),
				createdAt: new Date(),
				bookingId: booking.id,
			},
		});
	}

	console.log("🌱 Seed completed successfully!");
}

main()
	.catch((e) => {
		console.error("❌ Seed failed:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
