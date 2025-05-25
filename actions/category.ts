"use server"

import prisma from "@/lib/prisma";

// Updated getCategories to include mentors through the join table
export async function getCategories() {
	try {
		const categories = await prisma.category.findMany({
			include: {
				mentors: true
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		// Format the data to include mentor count
		const formattedCategories = categories.map(category => ({
			...category,
			mentorCount: categories.length
		}));

		return { categories: formattedCategories, error: null };
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { categories: [], error: "Failed to fetch categories" };
	}
}