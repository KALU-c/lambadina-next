/*
  Warnings:

  - You are about to drop the `MentorPricing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MentorPricing` DROP FOREIGN KEY `MentorPricing_mentor_id_fkey`;

-- DropTable
DROP TABLE `MentorPricing`;

-- CreateTable
CREATE TABLE `mentor_pricings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('BASIC', 'STANDARD', 'PREMIUM') NOT NULL,
    `price` DOUBLE NOT NULL,
    `mentor_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `mentor_pricings_mentor_id_type_key`(`mentor_id`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mentor_pricings` ADD CONSTRAINT `mentor_pricings_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
