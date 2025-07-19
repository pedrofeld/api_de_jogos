import { prisma } from "./config/prisma.config";
import { JogoRepository } from "./database/jogo.repository";
import { Decimal } from "@prisma/client/runtime/library";
import { PersonagemRepository } from "./database/personagem.repository";

const jogoRepository = new JogoRepository();
const personagemRepository = new PersonagemRepository();

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

    // 5 - Criar personagem

    // const personagem = await personagemRepository.incluir({
    //     nome: "Ellie",
    //     idade: 19,
    //     forca: 70,
    //     inteligencia: 90,
    //     habilidades: "Stealth, Arco, Faca",
    //     jogoId: "e01bdb54-efa3-420a-b09f-c8955338a368"
    // });
    // console.log(personagem);

    // 6 - Listar personagens

    // const personagens = await personagemRepository.listar();
    // console.log(personagens);

    // 7 - Atualizar personagem

    // const personagemAtualizado = await personagemRepository.atualizar(
    //     "4da0d7f6-bade-4ec4-b61d-52b2064198bc",
    //     {
    //         nome: "Ellie Williams",
    //         idade: 20,
    //         forca: 75,
    //         inteligencia: 92,
    //         habilidades: "Stealth, Arco, Faca, Pistola",
    //         jogoId: "e01bdb54-efa3-420a-b09f-c8955338a368"
    //     }
    // );
    // console.log(personagemAtualizado);

    // 8 - Deletar personagem

    // const personagemDeletado = await personagemRepository.deletar("4da0d7f6-bade-4ec4-b61d-52b2064198bc");
    // console.log(personagemDeletado);
};

main ();