/*
  Warnings:

  - You are about to drop the column `creator` on the `Channel` table. All the data in the column will be lost.
  - Added the required column `owner` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "creator",
ADD COLUMN     "owner" INTEGER NOT NULL;
