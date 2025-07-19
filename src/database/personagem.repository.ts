import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreatePersonagemDto } from "../dtos/create-personagem.dto";
import { UpdatePersonagemDto } from "../dtos/update-personagem.dto";

export class PersonagemRepository {
   public async listar() {
        try {
            const personagens = await prisma.personagem.findMany({
                orderBy: [
                    {
                        nome: "asc"
                    },
                    {
                        forca: "desc"
                    }
                ]
            });

            if(!personagens || personagens.length === 0){
                console.log("Nenhum personagem encontrado")
                return 
            } else{
                console.log("Personagens registrados:");
                return personagens;
            }
            
        } catch (error: any) {
            return handleError(error);
        }
    };
   
    public async incluir(dados: CreatePersonagemDto) {
        try {
            const personagem = await prisma.personagem.create({
                data: dados
            });

            console.log("Personagem incluído com sucesso!");

            return personagem;
        } catch (error: any) {
            return handleError(error);
        }
    };
   
    public async atualizar(id: string, dados: UpdatePersonagemDto) {
        try {
            const personagem = await prisma.personagem.update({
                where: {
                    id
                },
                data: {
                    nome: dados.nome,
                    idade: dados.idade,
                    forca: dados.forca,
                    inteligencia: dados.inteligencia,
                    habilidades: dados.habilidades,
                    jogoId: dados.jogoId
                }
            });

            console.log("Dados alterados com sucesso!");

            return personagem;
        } catch (error: any) {
            return handleError(error);
        }
    };
   
    public async deletar(id: string){
        try {
            const personagem = await prisma.personagem.delete({
                where: {
                    id
                }
            });

            console.log("Personagem deletado com sucesso!");

            return personagem;
        } catch (error: any) {
            return handleError(error);
        }
    };
};