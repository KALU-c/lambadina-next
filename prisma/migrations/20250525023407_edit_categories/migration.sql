/*
  Warnings:

  - You are about to drop the column `mentorId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_mentorId_fkey`;

-- DropIndex
DROP INDEX `Category_mentorId_fkey` ON `Category`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `mentorId`;
