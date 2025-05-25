"use server"

import prisma from "@/lib/prisma";
import { z } from "zod";
import { registerSchema } from "@/schema/registerSchema";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

export const verifyToken = async (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY as string) as { userId: number, iat: number, exp: number };
}

export const registerUser = async (userData: z.infer<typeof registerSchema>) => {
	const { password, username, email, user_type } = userData;

	try {
		const existingUser = await prisma.user.findUnique({
			where: { username }
		});

		if (existingUser) {
			return { user: null, error: "Username already taken" };
		}

		const hashedPassword = await argon2.hash(password);

		const user = await prisma.user.create({
			data: {
				password: hashedPassword,
				username,
				email,
				userType: user_type
			}
		});

		return { user, error: null };
	} catch (error) {
		console.error(error);
		return { user: null, error: "Registration failed" };
	}
}

export const loginUser = async (username: string, passwordText: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { username },
			select: { password: true, id: true }
		});

		if (!user) {
			return { token: null, message: "Invalid credentials. Please try again." };
		}

		const hasCorrectPassword = await argon2.verify(user.password, passwordText);

		if (!hasCorrectPassword) {
			return { token: null, message: "Invalid credentials. Please try again." }
		}

		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "7d" });

		// generate refresh token -?-?

		return { token: token, message: "" }
	} catch (error) {
		console.error(error);
		return { token: null, message: "Something went wrong. Please try again." }
	}
}

export const fetchUser = async (token: string) => {
	try {
		const decoded = await verifyToken(token);

		if (!decoded.userId) {
			return { user: null, message: "User id not fount" }
		}

		const user = await prisma.user.findUnique({
			where: { id: decoded.userId },
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
		});

		if (!user) {
			return { user: null, message: "User not found." }
		}

		const userData = {
			id: user.id,
			username: user.username,
			email: user.email,
			first_name: user.firstName,
			last_name: user.lastName,
			phone_number: user.phoneNumber,
			user_type: user.userType,
			profile_picture: user.profilePicture,
			is_verified: user.isVerified
		}

		return { user: userData, message: "" }
	} catch (error) {
		console.error(error);
		return { user: null, message: "Error fetching user profile" }
	}
}

export const updateUser = async (token: string, userData: FormData) => {
	try {
		const decoded = await verifyToken(token);

		// Convert FormData to plain object
		const data: any = {};
		userData.forEach((value, key) => {
			data[key] = value;
		});

		const user = await prisma.user.update({
			where: { id: decoded.userId },
			data: data,
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
		});

		if (!user) {
			return { user: null, message: "User not found." }
		}

		const updatedUserData = {
			id: user.id,
			username: user.username,
			email: user.email,
			first_name: user.firstName,
			last_name: user.lastName,
			phone_number: user.phoneNumber,
			user_type: user.userType,
			profile_picture: user.profilePicture,
			is_verified: user.isVerified
		}

		return { user: updatedUserData, error: "" }
	} catch (error) {
		console.log(error);
		return { user: null, error: "Failed to update profile." }
	}
}
