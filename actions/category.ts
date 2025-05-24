"use server"

import prisma from "@/lib/prisma";

export async function getCategories() {
	try {
		const categories = await prisma.category.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});


		return { categories, error: null };
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { categories: [], error: "Failed to fetch categories" };
	}
}