-- CreateTable
CREATE TABLE "jogo" (
    "id" TEXT NOT NULL,
    "genero" VARCHAR(9) NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "dataLancamento" TIMESTAMP(3) NOT NULL,
    "multiplayer" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagem" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "idade" INTEGER NOT NULL,
    "forca" INTEGER NOT NULL,
    "inteligencia" INTEGER NOT NULL,
    "habilidades" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
