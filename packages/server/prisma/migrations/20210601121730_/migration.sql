-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('unknown', 'wan', 'woman');

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(128) NOT NULL,
    "email" VARCHAR(128),
    "mobile" VARCHAR(32),
    "nickName" TEXT,
    "avatarUrl" TEXT,
    "gender" INTEGER,
    "province" TEXT,
    "city" TEXT,
    "country" TEXT,
    "language" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_local_auth" (
    "aid" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("aid")
);

-- CreateTable
CREATE TABLE "account_auth_log" (
    "id" TEXT NOT NULL,
    "aid" TEXT NOT NULL,
    "authType" VARCHAR(32) NOT NULL,
    "ip" VARCHAR(46) NOT NULL,
    "version" VARCHAR(64) NOT NULL,
    "platform" VARCHAR(64) NOT NULL,
    "screen" VARCHAR(12),
    "osFamily" VARCHAR(64) NOT NULL,
    "osArchitecture" VARCHAR(2) NOT NULL,
    "osVersion" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account.username_unique" ON "account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "account.email_unique" ON "account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "account.mobile_unique" ON "account"("mobile");

-- AddForeignKey
ALTER TABLE "account_local_auth" ADD FOREIGN KEY ("aid") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_auth_log" ADD FOREIGN KEY ("aid") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
