/*
  Warnings:

  - You are about to drop the column `content` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Journal` table. All the data in the column will be lost.
  - Added the required column `performedAt` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workTypeId` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workerName` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Journal` DROP COLUMN `content`,
    DROP COLUMN `title`,
    ADD COLUMN `performedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `unit` ENUM('M2', 'M3', 'PCS', 'KG', 'TON', 'METER') NOT NULL,
    ADD COLUMN `volume` DOUBLE NOT NULL,
    ADD COLUMN `workTypeId` INTEGER NOT NULL,
    ADD COLUMN `workerName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `WorkType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `WorkType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Journal` ADD CONSTRAINT `Journal_workTypeId_fkey` FOREIGN KEY (`workTypeId`) REFERENCES `WorkType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
