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
};

export type Availability = {
	id: number;
	dayOfWeek: number; // 0 = Sunday, 6 = Saturday
	startTime: Date; // ISO date string or time string
	endTime: Date;   // ISO date string or time string
	isAvailable: boolean;
	mentorId: number;
};

export type MentorProfile = {
	id: number;
	user: User;
	bio: string;
	categories: Category[];
	pricePerMinute: number;
	isAvailable: boolean;
	rating: number;
	totalSessions: number;
	availabilities: Availability[];
	createdAt: Date;
	updatedAt: Date;
};
