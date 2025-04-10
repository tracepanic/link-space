import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

if (!globalForPrisma.prisma) {
  if (process.env.NODE_ENV === "development") {
    globalForPrisma.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
  } else {
    globalForPrisma.prisma = new PrismaClient();
  }
}

const db = globalForPrisma.prisma;
export default db;
