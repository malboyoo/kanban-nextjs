-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'night'
);

-- CreateTable
CREATE TABLE "Board" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "describe" TEXT,
    CONSTRAINT "Board_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Column" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "index" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "boardId" INTEGER NOT NULL,
    CONSTRAINT "Column_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "columnId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    CONSTRAINT "Task_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
