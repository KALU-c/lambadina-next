export type BookingStatus =
	| 'PENDING'
	| 'CONFIRMED'
	| 'COMPLETED'
	| 'CANCELLED'
	| 'RESCHEDULED'
	| 'NO_SHOW';

export type Booking = {
	id: number;
	sessionDate: Date;
	startTime: Date;
	endTime: Date;
	durationMinutes: number;
	callType: string;
	status: BookingStatus;
	amountPaid: number;
	platformFee: number;
	mentorPayout: number;
	paymentStatus: boolean;
	callLink?: string | null;
	createdAt: Date;
	updatedAt: Date;
	clientId: number;
	mentorId: number;
	client?: {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		user: User
	};
	mentor?: {
		id: number;
		user: {
			id: number;
			firstName: string;
			lastName: string;
			profilePicture: string | null;
		};
	};
};

// types/user.ts
export enum UserType {
	MENTOR = "mentor",
	CLIENT = "client",
	ADMIN = "admin"
}

export type User = {
	id: number;
	password: string;
	lastLogin: Date | null;
	isSuperuser: boolean;
	username: string;
	firstName: string | null;
	lastName: string | null;
	email: string | null;
	isStaff: boolean;
	isActive: boolean;
	dateJoined: Date;
	userType: UserType;
	phoneNumber: string | null;
	profilePicture: string | null;
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;

	// Relations (optional based on your query needs)
	client?: Client;
	mentor?: Mentor;
	userGroups?: UserGroup[];
	userPermissions?: UserUserPermission[];
};

// Supporting types for relations
type Client = {
	id: number;
	interests: string;
	totalSessions: number;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
};

type Mentor = {
	id: number;
	bio: string;
	isAvailable: boolean;
	rating: number;
	totalSessions: number;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
};

type UserGroup = {
	id: number;
	userId: number;
	groupId: number;
};

type UserUserPermission = {
	id: number;
	userId: number;
	permissionId: number;
};

export type PricingType =
	"BASIC" |
	"STANDARD" |
	"PREMIUM";
