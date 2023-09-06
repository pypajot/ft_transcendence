/*
  Warnings:

  - You are about to drop the `_ChannelToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `creator` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ChannelToUser" DROP CONSTRAINT "_ChannelToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChannelToUser" DROP CONSTRAINT "_ChannelToUser_B_fkey";

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "creator" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ChannelToUser";

-- CreateTable
CREATE TABLE "_Members" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Members_AB_unique" ON "_Members"("A", "B");

-- CreateIndex
CREATE INDEX "_Members_B_index" ON "_Members"("B");

-- AddForeignKey
ALTER TABLE "_Members" ADD CONSTRAINT "_Members_A_fkey" FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Members" ADD CONSTRAINT "_Members_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
