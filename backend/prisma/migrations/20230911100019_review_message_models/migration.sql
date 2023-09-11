-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_targetSocketId_fkey";

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "targetSocketId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_targetSocketId_fkey" FOREIGN KEY ("targetSocketId") REFERENCES "User"("socketId") ON DELETE SET NULL ON UPDATE CASCADE;
