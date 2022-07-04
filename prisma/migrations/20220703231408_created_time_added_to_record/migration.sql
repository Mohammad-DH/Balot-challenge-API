/*
  Warnings:

  - Added the required column `CreatedTime` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Record` ADD COLUMN `CreatedTime` DATETIME(3) NOT NULL;
