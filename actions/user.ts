"use server"

import prisma from "@/lib/prisma";
import { z } from "zod";
import { registerSchema } from "@/schema/registerSchema";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

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