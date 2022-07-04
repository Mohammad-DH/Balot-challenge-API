-- CreateTable
CREATE TABLE `Admin` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Active` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Admin_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
