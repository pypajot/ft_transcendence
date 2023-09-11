/*
  Warnings:

  - You are about to drop the column `socketId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `UserChannel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorSocketId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetSocketId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_socketId_fkey";

-- DropForeignKey
ALTER TABLE "UserChannel" DROP CONSTRAINT "UserChannel_channelId_fkey";

-- DropForeignKey
ALTER TABLE "UserChannel" DROP CONSTRAINT "UserChannel_userId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "socketId",
ADD COLUMN     "authorSocketId" TEXT NOT NULL,
ADD COLUMN     "targetSocketId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserChannel";

-- CreateTable
CREATE TABLE "_Memberships" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Memberships_AB_unique" ON "_Memberships"("A", "B");

-- CreateIndex
CREATE INDEX "_Memberships_B_index" ON "_Memberships"("B");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorSocketId_fkey" FOREIGN KEY ("authorSocketId") REFERENCES "User"("socketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_targetSocketId_fkey" FOREIGN KEY ("targetSocketId") REFERENCES "User"("socketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Memberships" ADD CONSTRAINT "_Memberships_A_fkey" FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Memberships" ADD CONSTRAINT "_Memberships_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
