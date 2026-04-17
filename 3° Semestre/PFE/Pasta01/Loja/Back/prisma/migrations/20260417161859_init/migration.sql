-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "marca" TEXT NOT NULL
);
