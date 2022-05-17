/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `explorer_v2` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "explorer_v2" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "explorer_v2_name_key" ON "explorer_v2"("name");
