import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreateJogoDto } from "../dtos/create-jogo.dto";

export class JogoRepository {
    public async listar() {
        try {
            const jogos = await prisma.jogo.findMany({
                orderBy: [
                    {
                        dataLancamento: "asc"
                    },
                    {
                        nome: "asc"
                    }
                ]
            });

            console.log("Jogos registrados:")

            return jogos;
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async incluir(dados: CreateJogoDto) {
        try {
            const jogo = await prisma.jogo.create({
                data: dados
            });

            console.log("Jogo incluído com sucesso!")

            return jogo;
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async atualizar() {
        try {
            
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async deletar(){
        try {
            
        } catch (error: any) {
            return handleError(error);
        }
    };
};