/*
  Warnings:

  - Added the required column `nome` to the `jogo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogo" ADD COLUMN     "nome" VARCHAR(120) NOT NULL;
