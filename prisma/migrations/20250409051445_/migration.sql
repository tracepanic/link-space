-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('LINK', 'TEXT', 'EMBED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spaces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "visibility" "Visibility" NOT NULL DEFAULT 'PUBLIC',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "spaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blocks" (
    "id" TEXT NOT NULL,
    "type" "BlockType" NOT NULL,
    "order" INTEGER NOT NULL,
    "content" JSONB NOT NULL,
    "spaceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_clerkId_idx" ON "users"("clerkId");

-- CreateIndex
CREATE INDEX "spaces_slug_idx" ON "spaces"("slug");

-- CreateIndex
CREATE INDEX "spaces_userId_idx" ON "spaces"("userId");

-- CreateIndex
CREATE INDEX "spaces_visibility_idx" ON "spaces"("visibility");

-- CreateIndex
CREATE UNIQUE INDEX "spaces_userId_slug_key" ON "spaces"("userId", "slug");

-- CreateIndex
CREATE INDEX "blocks_spaceId_order_idx" ON "blocks"("spaceId", "order");

-- CreateIndex
CREATE INDEX "blocks_type_idx" ON "blocks"("type");

-- AddForeignKey
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "spaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
