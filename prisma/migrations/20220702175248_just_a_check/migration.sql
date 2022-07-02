/*
  Warnings:

  - Added the required column `RestaurantId` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Challenge` ADD COLUMN `RestaurantId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Restaurant` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Restaurant_Id_key`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Challenge` ADD CONSTRAINT `Challenge_RestaurantId_fkey` FOREIGN KEY (`RestaurantId`) REFERENCES `Restaurant`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
