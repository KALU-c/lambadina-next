-- AlterTable
ALTER TABLE `User` MODIFY `user_type` ENUM('mentor', 'client', 'admin') NOT NULL DEFAULT 'client';
