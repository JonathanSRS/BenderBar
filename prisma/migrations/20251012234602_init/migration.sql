-- CreateTable
CREATE TABLE "Bebidas" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nome" TEXT,
    "marca" TEXT,
    "teor_alcoolico" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bebidas_pkey" PRIMARY KEY ("id")
);
