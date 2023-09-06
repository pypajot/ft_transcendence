/*
  Warnings:

  - A unique constraint covering the columns `[socketId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_socketId_key" ON "User"("socketId");
