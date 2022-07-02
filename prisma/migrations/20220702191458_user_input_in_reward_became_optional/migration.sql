-- DropForeignKey
ALTER TABLE `Reward` DROP FOREIGN KEY `Reward_UserId_fkey`;

-- AlterTable
ALTER TABLE `Reward` MODIFY `UserId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
