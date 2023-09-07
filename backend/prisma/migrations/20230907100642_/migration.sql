/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserChannel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Channel_id_key" ON "Channel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserChannel_userId_key" ON "UserChannel"("userId");
