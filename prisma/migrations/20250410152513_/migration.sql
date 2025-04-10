/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `spaces` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `spaces` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "spaces" DROP COLUMN "deletedAt",
DROP COLUMN "isDeleted";

-- CreateTable
CREATE TABLE "pinned_spaces" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pinned_spaces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pinned_spaces_userId_spaceId_key" ON "pinned_spaces"("userId", "spaceId");

-- AddForeignKey
ALTER TABLE "pinned_spaces" ADD CONSTRAINT "pinned_spaces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pinned_spaces" ADD CONSTRAINT "pinned_spaces_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "spaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
