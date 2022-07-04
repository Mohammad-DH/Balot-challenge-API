/*
  Warnings:

  - You are about to alter the column `Score` on the `Record` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Record` MODIFY `Score` INTEGER NOT NULL;
