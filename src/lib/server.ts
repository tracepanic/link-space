"use server";

import { BlockType, Space, Visibility } from "@/generated/prisma";
import db from "@/lib/db";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getUser(): Promise<User | null> {
  return currentUser();
}

type CreateSpaceWithBlocks = {
  title: string;
  slug: string;
  description?: string;
  visibility: Visibility;
  blocks: { id: string; type: BlockType; order: number; content: any }[];
};

export async function createSpaceWithBlocks(
  data: CreateSpaceWithBlocks,
): Promise<{ success: boolean }> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description || "",
        visibility: data.visibility,
        user: { connect: { clerkId: user.id } },
        block: {
          create: data.blocks.map((block) => ({
            type: block.type,
            order: block.order,
            content: block.content,
          })),
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

export async function getAllSpaces(): Promise<Space[] | []> {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  try {
    const res = await db.space.findMany({
      where: { user: { clerkId: user.id } },
    });

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
}
