"use server";

import { Space } from "@/generated/prisma";
import db from "@/lib/db";
import {
  CreateSpaceWithBlocks,
  PinnedSpace,
  SearchResult,
  SpaceWithBlocks,
} from "@/types";
import { auth, currentUser, User } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUser(): Promise<User | null> {
  const { userId } = await auth();
  if (!userId) return null;

  try {
    return await currentUser();
  } catch (error) {
    console.error("Clerk user fetch error:", error);
    return null;
  }
}

export async function createSpaceWithBlocks(
  data: CreateSpaceWithBlocks,
): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    return await db.$transaction(
      async (tx) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const spaceData: any = {
          title: data.title,
          slug: data.slug,
          description: data.description || "",
          visibility: data.visibility,
          isHome: data.isHome || false,
          isInHeader: data.isInHeader || false,
          user: { connect: { clerkId: user.id } },
        };

        if (data.isHome === true) {
          await tx.space.updateMany({
            where: {
              user: { clerkId: user.id },
              isHome: true,
            },
            data: { isHome: false },
          });
        }

        const space = await tx.space.create({
          data: spaceData,
        });

        if (data.blocks && data.blocks.length > 0) {
          await tx.block.createMany({
            data: data.blocks.map((block) => ({
              spaceId: space.id,
              type: block.type,
              order: block.order,
              content: block.content,
            })),
          });
        }

        return { success: !!space };
      },
      { timeout: 10000 },
    );
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function getAllSpaces(): Promise<Space[] | []> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.findMany({
      where: { user: { clerkId: user.id } },
      orderBy: { updatedAt: "desc" },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllPublicSpaces(): Promise<Space[] | []> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.findMany({
      where: { visibility: "PUBLIC", user: { clerkId: user.id } },
      orderBy: { updatedAt: "desc" },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllPrivateSpaces(): Promise<Space[] | []> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.findMany({
      where: { visibility: "PRIVATE", user: { clerkId: user.id } },
      orderBy: { updatedAt: "desc" },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPrivateUserSpace(
  id: string,
): Promise<SpaceWithBlocks | null> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.findUnique({
      where: { id, user: { clerkId: user.id } },
      include: { block: true },
    });

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllPublicSpacesWithBlock(
  id: string,
): Promise<SpaceWithBlocks[] | []> {
  try {
    const res = await db.space.findMany({
      where: {
        user: { id },
        visibility: "PUBLIC",
      },
      include: { block: true },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteSpace(id: string): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.delete({
      where: { id, user: { clerkId: user.id } },
    });

    if (res) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function updateSpaceWithBlocks(
  id: string,
  data: CreateSpaceWithBlocks,
): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    return await db.$transaction(
      async (tx) => {
        await tx.block.deleteMany({
          where: { spaceId: id },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const spaceUpdateData: any = {
          title: data.title,
          slug: data.slug,
          description: data.description || "",
          visibility: data.visibility,
          isHome: data.isHome || false,
          isInHeader: data.isInHeader || false,
        };

        if (data.isHome === true) {
          await tx.space.updateMany({
            where: {
              user: { clerkId: user.id },
              isHome: true,
              id: { not: id },
            },
            data: { isHome: false },
          });
        }

        const updatedSpace = await tx.space.update({
          where: { id, user: { clerkId: user.id } },
          data: spaceUpdateData,
        });

        if (data.blocks.length > 0) {
          await tx.block.createMany({
            data: data.blocks.map((block) => ({
              spaceId: id,
              type: block.type,
              order: block.order,
              content: block.content,
            })),
          });
        }

        return { success: !!updatedSpace };
      },
      { timeout: 10000 },
    );
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function getPinnedSpaces(): Promise<PinnedSpace[] | []> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.pinnedSpace.findMany({
      where: { user: { clerkId: user.id } },
      select: { space: { select: { id: true, title: true } } },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function pinSpace(spaceId: string): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.pinnedSpace.create({
      data: {
        space: { connect: { id: spaceId } },
        user: { connect: { clerkId: user.id } },
      },
    });

    if (res) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function unpinSpace(
  spaceId: string,
): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const userId = await db.user.findFirst({
      where: { clerkId: user.id },
      select: { id: true },
    });

    if (!userId) return { success: false };

    const res = await db.pinnedSpace.delete({
      where: {
        userId_spaceId: {
          userId: userId.id,
          spaceId,
        },
      },
    });

    if (res) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function saveUserId() {
  const cookieStore = await cookies();
  const user = await getUser();
  if (!user) {
    return null;
  }

  try {
    const res = await db.user.findUnique({
      where: { clerkId: user.id },
      select: { id: true },
    });

    if (res) {
      cookieStore.set("userId", res.id, { secure: true });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getUserId(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const id = cookieStore.get("userId")?.value;
  return id;
}

export async function deleteUserId() {
  (await cookies()).delete("userId");
}

export async function searchSpaces(
  query: string,
): Promise<SearchResult[] | []> {
  if (!query || query.trim() === "") {
    return [];
  }

  try {
    const searchQuery = query.trim().toLowerCase();

    const spaces = db.space.findMany({
      where: {
        visibility: "PUBLIC",
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
          { slug: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
    });

    return spaces;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Increment view count for a public space
 * No auth required - public tracking
 */
export async function incrementSpaceView(
  spaceId: string,
): Promise<{ success: boolean }> {
  try {
    await db.space.update({
      where: {
        id: spaceId,
        visibility: "PUBLIC",
      },
      data: {
        viewCount: { increment: 1 },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("View increment error:", error);
    return { success: false };
  }
}

/**
 * Get random public spaces for discovery page
 */
export async function getDiscoverSpaces(
  limit?: number,
): Promise<SpaceWithBlocks[]> {
  try {
    const spaces = await db.space.findMany({
      where: {
        visibility: "PUBLIC",
        isHome: true,
      },
      include: {
        user: true,
        block: true,
      },
      take: limit || 24,
      orderBy: { updatedAt: "desc" },
    });

    return spaces;
  } catch (error) {
    console.error("Discover spaces error:", error);
    return [];
  }
}

/**
 * Get trending spaces (most viewed in last N days)
 * Note: Current implementation uses total viewCount with updatedAt filter
 * For true "last N days" trending, would need SpaceView model with timestamps
 */
export async function getTrendingSpaces(
  limit?: number,
  days?: number,
): Promise<SpaceWithBlocks[]> {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - (days || 7));

    const spaces = await db.space.findMany({
      where: {
        visibility: "PUBLIC",
        isHome: true,
        updatedAt: { gte: cutoffDate },
      },
      include: {
        user: true,
        block: true,
      },
      orderBy: { viewCount: "desc" },
      take: limit || 20,
    });

    return spaces;
  } catch (error) {
    console.error("Trending spaces error:", error);
    return [];
  }
}

/**
 * Update user settings (currently just branding preference)
 */
export async function updateUserSettings(settings: {
  showBranding: boolean;
}): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    await db.user.update({
      where: { clerkId: user.id },
      data: { showBranding: settings.showBranding },
    });

    return { success: true };
  } catch (error) {
    console.error("Update settings error:", error);
    return { success: false };
  }
}

/**
 * Get user's branding preference
 * No auth required - needed for public profile pages
 */
export async function getUserBrandingSetting(
  userId: string,
): Promise<boolean> {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { showBranding: true },
    });

    return user?.showBranding ?? true;
  } catch (error) {
    console.error("Get branding setting error:", error);
    return true; // Default to showing branding
  }
}
