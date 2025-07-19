import { prisma } from "./config/prisma.config";
import { JogoRepository } from "./database/jogo.repository";
import { Decimal } from "@prisma/client/runtime/library";

const jogoRepository = new JogoRepository();

async function main() {
    // 1 - Criar novo jogo

    // const jogo = await jogoRepository.incluir({
    //     nome: "Identity V",
    //     genero: "Ação",
    //     preco: new Decimal(0),
    //     tamanho: 1,
    //     dataLancamento: new Date("2018-07-30"),
    //     multiplayer: true
    // });
    // console.log(jogo);

    // const jogo2 = await jogoRepository.incluir({
    //     nome: "Dead by Daylight",
    //     genero: "Ação",
    //     preco: new Decimal(79.90),
    //     tamanho: 20,
    //     dataLancamento: new Date("2016-06-14"),
    //     multiplayer: true
    // });
    // console.log(jogo2);

    // const jogo3 = await jogoRepository.incluir({
    //     nome: "The Last of Us Part II",
    //     genero: "Ação",
    //     preco: new Decimal(249.90),
    //     tamanho: 100,
    //     dataLancamento: new Date("2020-06-19"),
    //     multiplayer: true
    // });
    // console.log(jogo3);

    // const jogo4 = await jogoRepository.incluir({
    //     nome: "The Witcher 3: Wild Hunt",
    //     genero: "Ação",
    //     preco: new Decimal(89.99),
    //     tamanho: 50,
    //     dataLancamento: new Date("2015-05-19"),
    //     multiplayer: true
    // });
    // console.log(jogo4);

    // const jogo5 = await jogoRepository.incluir({
    //     nome: "Cyberpunk",
    //     genero: "Ação",
    //     preco: new Decimal(199.90),
    //     tamanho: 70,
    //     dataLancamento: new Date("2020-12-10"),
    //     multiplayer: true
    // });
    // console.log(jogo5);

    // 2 - Listar jogos

    // const jogos = await jogoRepository.listar();
    // console.log(jogos);

    // 3 - Atualizar jogo

    // const jogoAtualizado = await jogoRepository.atualizar(
    //     "e250a249-0d1d-4652-99c8-5fb364fd42fe",
    //     {
    //         genero: "Survival"
    //     }
    // );
    // console.log(jogoAtualizado);

    // 4 - Excluir jogo

    // const jogo = await jogoRepository.deletar("e250a249-0d1d-4652-99c8-5fb364fd42fe");
    // console.log(jogo);
};

main ();