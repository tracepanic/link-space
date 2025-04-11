"use server";

import { Space } from "@/generated/prisma";
import db from "@/lib/db";
import { CreateSpaceWithBlocks, PinnedSpace, SpaceWithBlocks } from "@/types";
import { auth, currentUser, User } from "@clerk/nextjs/server";
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
