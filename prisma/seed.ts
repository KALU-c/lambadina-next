import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

// Using Picsum Photos API for random professional portraits
const getRandomPortrait = (id: number) =>
	`https://picsum.photos/seed/mentor-${id}/300/300`;

const CATEGORIES = [
	{ name: 'Web Development', description: 'Frontend and backend development' },
	{ name: 'Mobile Development', description: 'iOS and Android app development' },
	{ name: 'Data Science', description: 'Machine learning and analytics' },
	{ name: 'UX/UI Design', description: 'User experience and interface design' },
	{ name: 'Digital Marketing', description: 'SEO and social media strategies' },
	{ name: 'Startup Consulting', description: 'Business growth and funding' },
	{ name: 'Career Coaching', description: 'Interview preparation and resumes' },
	{ name: 'Financial Advice', description: 'Personal finance and investing' },
];

async function createMentors(count: number) {
	// Create categories first if they don't exist
	await prisma.category.createMany({
		data: CATEGORIES,
		skipDuplicates: true,
	});

	const allCategories = await prisma.category.findMany();

	for (let i = 1; i <= count; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();
		const email = faker.internet.email({ firstName, lastName }).toLowerCase();

		// Create user account
		const user = await prisma.user.create({
			data: {
				username: faker.internet.userName({ firstName, lastName }),
				password: await argon2.hash('Password123!'),
				firstName,
				lastName,
				email,
				phoneNumber: faker.phone.number(),
				profilePicture: getRandomPortrait(i),
				userType: 'mentor',
				isVerified: true,
				isActive: true,
			},
		});

		// Create mentor profile
		const mentor = await prisma.mentor.create({
			data: {
				bio: `${faker.person.jobTitle()} with ${faker.number.int({ min: 2, max: 15 })} years experience. ${faker.lorem.paragraph()}`,
				isAvailable: faker.datatype.boolean({ probability: 0.85 }), // 85% available
				rating: parseFloat(faker.number.float({
					min: 3.8,
					max: 5,
					fractionDigits: 1
				}).toFixed(1)),
				totalSessions: faker.number.int({ min: 5, max: 200 }),
				userId: user.id,
				pricing: {
					create: [
						{
							type: 'BASIC',
							price: parseFloat(faker.number.float({
								min: 20,
								max: 50,
								fractionDigits: 2
							}).toFixed(2))
						},
						{
							type: 'STANDARD',
							price: parseFloat(faker.number.float({
								min: 50,
								max: 100,
								fractionDigits: 2
							}).toFixed(2))
						},
						{
							type: 'PREMIUM',
							price: parseFloat(faker.number.float({
								min: 100,
								max: 200,
								fractionDigits: 2
							}).toFixed(2))
						},
					],
				},
			},
			include: { pricing: true },
		});

		// Assign 1-3 random categories
		const categories = faker.helpers.arrayElements(
			allCategories,
			faker.number.int({ min: 1, max: 3 })
		);

		await prisma.mentorCategory.createMany({
			data: categories.map(category => ({
				mentorId: mentor.id,
				categoryId: category.id,
			})),
		});

		// Create weekly availability (2-4 time slots)
		const days = [1, 2, 3, 4, 5]; // Weekdays
		const selectedDays = faker.helpers.arrayElements(days, faker.number.int({ min: 2, max: 4 }));

		for (const day of selectedDays) {
			const hour = faker.number.int({ min: 9, max: 17 }); // 9AM-5PM
			await prisma.mentorAvailability.create({
				data: {
					mentorId: mentor.id,
					dayOfWeek: day,
					startTime: new Date(2025, 0, day + 1, hour),
					endTime: new Date(2025, 0, day + 1, hour + 1),
					isAvailable: true,
				},
			});
		}

		console.log(`Created mentor ${i}/${count}: ${firstName} ${lastName}`);
	}
}

async function main() {
	console.log('🌱 Starting seed...');

	// Clear existing mentor data (and related)
	await prisma.mentorAvailability.deleteMany();
	await prisma.mentorPricing.deleteMany();
	await prisma.mentorCategory.deleteMany();
	await prisma.mentor.deleteMany();
	await prisma.user.deleteMany({ where: { userType: 'mentor' } });

	// Create 40 mentors
	await createMentors(40);

	console.log('✅ Seed completed successfully!');
}

main()
	.catch(e => {
		console.error('Seed failed:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});