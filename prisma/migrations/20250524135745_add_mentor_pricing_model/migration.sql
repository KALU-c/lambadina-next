/*
  Warnings:

  - You are about to drop the column `price_per_minute` on the `Mentor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Mentor` DROP COLUMN `price_per_minute`;

-- CreateTable
CREATE TABLE `MentorPricing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('BASIC', 'STANDARD', 'PREMIUM') NOT NULL,
    `price` DOUBLE NOT NULL,
    `mentor_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MentorPricing` ADD CONSTRAINT `MentorPricing_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
