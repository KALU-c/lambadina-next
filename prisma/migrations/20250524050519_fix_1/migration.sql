/*
  Warnings:

  - You are about to alter the column `user_type` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `is_superuser` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `is_staff` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_active` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `date_joined` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `user_type` ENUM('mentor', 'client') NOT NULL DEFAULT 'client',
    MODIFY `phone_number` VARCHAR(191) NULL,
    MODIFY `is_verified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
