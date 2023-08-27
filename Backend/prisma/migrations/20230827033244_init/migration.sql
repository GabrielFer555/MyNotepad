-- CreateTable
CREATE TABLE "texts" (
    "id" SERIAL NOT NULL,
    "titles" TEXT NOT NULL,
    "description" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "dateModified" TIMESTAMP(3),

    CONSTRAINT "texts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apiKey" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "dataBegin" TIMESTAMP(3) NOT NULL,
    "dataEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "apiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
