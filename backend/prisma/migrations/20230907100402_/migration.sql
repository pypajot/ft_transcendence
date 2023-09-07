/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `UserChannel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserChannel_id_key" ON "UserChannel"("id");
