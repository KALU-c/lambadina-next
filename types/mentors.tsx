type UserType = 'client' | 'mentor' | 'admin' | string;

export type User = {
	id: number;
	username: string;
	phoneNumber: string | null;
	firstName: string | null;
	lastName: string | null;
	email: string | null;
	userType: UserType;
	profilePicture: string | null;
	isVerified: boolean;
};

export type Category = {
	id: number;
	name: string;
	description: string;
	createdAt: Date; // ISO date string
	mentors: {
		id: number;
		mentorId: number;
		categoryId: number;
	}[];
};

export type Availability = {
	id: number;
	dayOfWeek: number; // 0 = Sunday, 6 = Saturday
	startTime: Date; // ISO date string or time string
	endTime: Date;   // ISO date string or time string
	isAvailable: boolean;
	mentorId: number;
};

export type MentorPricingType = "BASIC" | "STANDARD" | "PREMIUM"

export type MentorPricing = {
	id: number
	type: MentorPricingType
	price: number
	mentorId?: number
	createdAt: Date
}

export type MentorProfile = {
	id: number;
	user: User;
	bio: string;
	categories: Category[];
	isAvailable: boolean;
	rating: number;
	totalSessions: number;
	availabilities: Availability[];
	pricing: MentorPricing[];
	createdAt: Date;
	updatedAt: Date;
};
