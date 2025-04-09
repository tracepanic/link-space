"use server";

import { currentUser, User } from "@clerk/nextjs/server";

export default async function getUser(): Promise<User | null> {
  return currentUser();
}
