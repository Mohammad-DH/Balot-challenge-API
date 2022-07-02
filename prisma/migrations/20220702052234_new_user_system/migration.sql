-- CreateTable
CREATE TABLE `User` (
    `Id` VARCHAR(191) NOT NULL,
    `Points` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `User_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Challenge` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `CreatedTime` DATETIME(3) NOT NULL,
    `Start` DATETIME(3) NOT NULL,
    `End` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Challenge_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAndChallenge` (
    `UserId` VARCHAR(191) NOT NULL,
    `ChallengeId` INTEGER NOT NULL,

    PRIMARY KEY (`UserId`, `ChallengeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Record` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` VARCHAR(191) NOT NULL,
    `Nickname` VARCHAR(191) NOT NULL,
    `ChallengeId` INTEGER NOT NULL,
    `Score` VARCHAR(191) NOT NULL,
    `SpentTime` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Record_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reward` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Points` INTEGER NOT NULL,
    `Rank` INTEGER NOT NULL,
    `UserId` VARCHAR(191) NOT NULL,
    `ChallengeId` INTEGER NOT NULL,

    UNIQUE INDEX `Reward_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAndChallenge` ADD CONSTRAINT `UserAndChallenge_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAndChallenge` ADD CONSTRAINT `UserAndChallenge_ChallengeId_fkey` FOREIGN KEY (`ChallengeId`) REFERENCES `Challenge`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Record` ADD CONSTRAINT `Record_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Record` ADD CONSTRAINT `Record_ChallengeId_fkey` FOREIGN KEY (`ChallengeId`) REFERENCES `Challenge`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reward` ADD CONSTRAINT `Reward_ChallengeId_fkey` FOREIGN KEY (`ChallengeId`) REFERENCES `Challenge`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
