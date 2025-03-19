/*
  Warnings:

  - You are about to drop the column `cover_image_url` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Chapter` table. All the data in the column will be lost.
  - Added the required column `content` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "draft" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chapter_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chapter" ("createdAt", "draft", "id", "name", "titleId", "updatedAt") SELECT "createdAt", "draft", "id", "name", "titleId", "updatedAt" FROM "Chapter";
DROP TABLE "Chapter";
ALTER TABLE "new_Chapter" RENAME TO "Chapter";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
