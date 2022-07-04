-- DropForeignKey
ALTER TABLE `Reward` DROP FOREIGN KEY `Reward_ChallengeId_fkey`;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_ChallengeId_fkey` FOREIGN KEY (`ChallengeId`) REFERENCES `Challenge`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
