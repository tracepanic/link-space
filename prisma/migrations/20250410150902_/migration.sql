-- AlterTable
ALTER TABLE "blocks" ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "blocks_spaceId_type_order_idx" ON "blocks"("spaceId", "type", "order");
