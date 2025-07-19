import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreateJogoDto } from "../dtos/create-jogo.dto";
import { UpdateJogoDto } from "../dtos/update-jogo.dto";

export class JogoRepository {
    public async listar() {
        try {
            const jogos = await prisma.jogo.findMany({
                include: {
                    personagem: true
                },
                orderBy: [
                    {
                        dataLancamento: "asc"
                    },
                    {
                        nome: "asc"
                    }
                ]
            });

            for (const jogo of jogos) {
                console.log(`\n🎮 ${jogo.nome}`);
                console.log(`Id: ${jogo.id}`);
                console.log(`Lançamento: ${jogo.dataLancamento.toLocaleDateString("pt-BR")}`);
                console.log(`Gênero: ${jogo.genero}`);
                console.log(`Preço: R$ ${jogo.preco.toFixed(2)}`);
                console.log(`amanho: ${jogo.tamanho} GB`);
                console.log(`Multiplayer: ${jogo.multiplayer ? "Sim" : "Não"}`);

                if (jogo.personagem.length > 0) {
                    console.log("👤 Personagens:");
                    for (const p of jogo.personagem) {
                        console.log(`   - ${p.nome} | Idade: ${p.idade} | Força: ${p.forca} | Inteligência: ${p.inteligencia}`);
                        console.log(`     Habilidades: ${p.habilidades}`);
                    }
                } else {
                    console.log("⚠️ Nenhum personagem cadastrado.");
                }
            }
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async incluir(dados: CreateJogoDto) {
        try {
            const jogo = await prisma.jogo.create({
                data: dados
            });

            console.log("Jogo incluído com sucesso!");

            return jogo;
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async atualizar(id: string, dados: UpdateJogoDto) {
        try {
            const jogo = await prisma.jogo.update({
                where: {
                    id
                },
                data: {
                    nome: dados.nome,
                    genero: dados.genero,
                    preco: dados.preco,
                    tamanho: dados.tamanho,
                    dataLancamento: dados.dataLancamento,
                    multiplayer: dados.multiplayer
                }
            });

            console.log("Dados alterados com sucesso!");

            return jogo;
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async deletar(id: string){
        try {
            const jogo = await prisma.jogo.delete({
                where: {
                    id
                }
            });

            console.log("Jogo deletado com sucesso!");

            return jogo;
        } catch (error: any) {
            return handleError(error);
        }
    };
};