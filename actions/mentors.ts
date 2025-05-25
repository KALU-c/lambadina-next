"use server"

import prisma from "@/lib/prisma";
import { verifyToken } from "./user";
import { revalidatePath } from "next/cache";
import { PricingType } from "@/types";

// Updated getMentors to properly include categories through the join table
export const getMentors = async () => {
  try {
    const mentors = await prisma.mentor.findMany({
      include: {
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
        categories: {
          include: {
            category: {
              include: {
                mentors: true
              }
            }
          }
        },
        pricing: true,
        availabilities: true
      },
      orderBy: {
        rating: 'desc'
      }
    });

    // Map the data to include categories directly in the response
    const formattedMentors = mentors.map(mentor => ({
      ...mentor,
      categories: mentor.categories.map(mc => mc.category)
    }));

    return { mentors: formattedMentors, error: "" };
  } catch (error) {
    console.log(error);
    return { mentors: [], error: "Error fetching mentors" };
  }
}


// Updated getMentor to include categories through join table
export const getMentor = async (id: string, token?: string) => {
  try {
    let decoded: {
      userId: number;
      iat: number;
      exp: number;
    } | null = null;

    if (token) {
      decoded = await verifyToken(token);
    }

    const mentor = await prisma.mentor.findUnique({
      where: { id: parseInt(id) || decoded?.userId },
      include: {
        user: true,
        pricing: true,
        categories: {
          include: {
            category: true
          }
        },
        availabilities: true
      }
    });

    if (!mentor) {
      return { mentor: null, error: "Mentor not found" };
    }

    // Format the data to include categories directly
    const formattedMentor = {
      ...mentor,
      categories: mentor.categories.map(mc => mc.category)
    };

    return { mentor: formattedMentor, error: "" };
  } catch (error) {
    console.error(error);
    return { mentor: null, error: "Error fetching mentor detail" };
  }
};


export const updateMentor = async (
  token: string,
  data: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bio: string;
    basicPrice: string;
    standardPrice: string;
    premiumPrice: string;
    is_available: boolean;
    profilePicture?: string;
    categories?: number[];
  }
) => {
  try {
    // Verify the user token
    const decoded = await verifyToken(token);

    if (!decoded.userId) {
      return { error: "Unauthorized", mentor: null };
    }

    // Split full name into first and last names
    const [firstName, ...lastNameParts] = data.fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    // Update user data
    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        firstName,
        lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        profilePicture: data.profilePicture,
      },
    });

    // Update mentor data
    const updatedMentor = await prisma.mentor.upsert({
      where: { userId: updatedUser.id },
      update: {
        bio: data.bio,
        isAvailable: data.is_available,
      },
      create: {
        bio: data.bio,
        isAvailable: data.is_available,
        rating: 0,
        totalSessions: 0,
        userId: updatedUser.id
      },
      include: {
        user: true,
        pricing: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    // Update pricing for all three types
    const pricingUpdates = [
      {
        type: "BASIC" as PricingType,
        price: parseFloat(data.basicPrice),
      },
      {
        type: "STANDARD" as PricingType,
        price: parseFloat(data.standardPrice),
      },
      {
        type: "PREMIUM" as PricingType,
        price: parseFloat(data.premiumPrice),
      },
    ];

    // Upsert all pricing types
    await Promise.all(
      pricingUpdates.map((pricing) =>
        prisma.mentorPricing.upsert({
          where: {
            mentor_pricing_unique: {
              mentorId: updatedMentor.id,
              type: pricing.type,
            },
          },
          update: {
            price: pricing.price,
          },
          create: {
            mentorId: updatedMentor.id,
            type: pricing.type,
            price: pricing.price,
          },
        })
      )
    );

    // Update categories if provided
    if (data.categories && data.categories.length > 0) {
      // First remove existing categories
      await prisma.mentorCategory.deleteMany({
        where: { mentorId: updatedMentor.id },
      });

      // Then add new ones
      await prisma.mentorCategory.createMany({
        data: data.categories.map((categoryId) => ({
          mentorId: updatedMentor.id,
          categoryId,
        })),
      });
    }

    // Revalidate paths
    revalidatePath("/profile");
    revalidatePath(`/mentors/${updatedMentor.id}`);

    // Fetch updated mentor with all relations
    const result = await prisma.mentor.findUnique({
      where: { id: updatedMentor.id },
      include: {
        user: true,
        pricing: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return {
      mentor: result
        ? {
          ...result,
          categories: result.categories.map((mc) => mc.category),
        }
        : null,
      error: null,
    };
  } catch (error) {
    console.error("Error updating mentor:", error);
    return { error: "Failed to update mentor profile", mentor: null };
  }
};
