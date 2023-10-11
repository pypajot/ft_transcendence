/*
  Warnings:

  - You are about to drop the `Backgound` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Backgound";

-- CreateTable
CREATE TABLE "Background" (
    "id" SERIAL NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);
