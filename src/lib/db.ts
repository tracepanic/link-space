import { PrismaClient as PrismaClientEdge } from "@/generated/prisma/edge";
import { PrismaClient as PrismaClientDev } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

let db: PrismaClientDev;

if (process.env.NODE_ENV === "production") {
  const prisma = new PrismaClientEdge();
  db = prisma.$extends(withAccelerate()) as unknown as PrismaClientDev;
} else {
  const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClientDev;
  };

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClientDev();
  }

  db = globalForPrisma.prisma;
}

export default db;
