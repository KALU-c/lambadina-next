-- AlterTable
ALTER TABLE `Client` MODIFY `interests` VARCHAR(191) NULL,
    MODIFY `total_sessions` INTEGER NOT NULL DEFAULT 0;
