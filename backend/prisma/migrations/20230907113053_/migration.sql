/*
  Warnings:

  - You are about to drop the column `userChannelId` on the `Channel` table. All the data in the column will be lost.
  - Added the required column `channelId` to the `UserChannel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_userChannelId_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "userChannelId";

-- AlterTable
ALTER TABLE "UserChannel" ADD COLUMN     "channelId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserChannel" ADD CONSTRAINT "UserChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
