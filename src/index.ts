import { prisma } from "./config/prisma.config";
import { JogoRepository } from "./database/jogo.repository";
import { Decimal } from "@prisma/client/runtime/library";

const jogoRepository = new JogoRepository();

async function main() {
    // 1 - Criar novo jogo
    const jogo = await jogoRepository.incluir({
        nome: "Identity V",
        genero: "Ação",
        preco: new Decimal(0),
        tamanho: 1,
        dataLancamento: new Date("2018-07-30"),
        multiplayer: true
    })
    console.log(jogo);
};

main ();