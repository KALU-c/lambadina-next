-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_mentor_id_fkey`;

-- DropForeignKey
ALTER TABLE `BookingReview` DROP FOREIGN KEY `BookingReview_booking_id_fkey`;

-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_mentorId_fkey`;

-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Mentor` DROP FOREIGN KEY `Mentor_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `MentorAvailability` DROP FOREIGN KEY `MentorAvailability_mentor_id_fkey`;

-- DropForeignKey
ALTER TABLE `MentorCategory` DROP FOREIGN KEY `MentorCategory_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `MentorCategory` DROP FOREIGN KEY `MentorCategory_mentor_id_fkey`;

-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_booking_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserGroup` DROP FOREIGN KEY `UserGroup_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserUserPermission` DROP FOREIGN KEY `UserUserPermission_user_id_fkey`;

-- DropIndex
DROP INDEX `Booking_client_id_fkey` ON `Booking`;

-- DropIndex
DROP INDEX `Booking_mentor_id_fkey` ON `Booking`;

-- DropIndex
DROP INDEX `Category_mentorId_fkey` ON `Category`;

-- DropIndex
DROP INDEX `MentorCategory_category_id_fkey` ON `MentorCategory`;

-- AddForeignKey
ALTER TABLE `UserGroup` ADD CONSTRAINT `UserGroup_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserUserPermission` ADD CONSTRAINT `UserUserPermission_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mentor` ADD CONSTRAINT `Mentor_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MentorCategory` ADD CONSTRAINT `MentorCategory_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MentorCategory` ADD CONSTRAINT `MentorCategory_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MentorAvailability` ADD CONSTRAINT `MentorAvailability_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `Mentor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingReview` ADD CONSTRAINT `BookingReview_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
