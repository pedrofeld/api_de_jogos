/*
  Warnings:

  - The primary key for the `jogo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `personagem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `jogo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `personagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jogoId` on the `personagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "personagem" DROP CONSTRAINT "personagem_jogoId_fkey";

-- AlterTable
ALTER TABLE "jogo" DROP CONSTRAINT "jogo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "dataLancamento" SET DATA TYPE DATE,
ALTER COLUMN "multiplayer" SET DEFAULT true,
ADD CONSTRAINT "jogo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "personagem" DROP CONSTRAINT "personagem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "jogoId",
ADD COLUMN     "jogoId" UUID NOT NULL,
ADD CONSTRAINT "personagem_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
