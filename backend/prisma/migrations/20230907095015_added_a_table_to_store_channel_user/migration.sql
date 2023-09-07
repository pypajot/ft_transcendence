/*
  Warnings:

  - You are about to drop the `_Members` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userchanId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_Members" DROP CONSTRAINT "_Members_A_fkey";

-- DropForeignKey
ALTER TABLE "_Members" DROP CONSTRAINT "_Members_B_fkey";

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "userChannelId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userchanId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_Members";

-- CreateTable
CREATE TABLE "UserChannel" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "channelId" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "UserChannel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserChannel" ADD CONSTRAINT "UserChannel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_userChannelId_fkey" FOREIGN KEY ("userChannelId") REFERENCES "UserChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
