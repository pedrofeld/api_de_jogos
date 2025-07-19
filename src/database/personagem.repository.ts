import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreatePersonagemDto } from "../dtos/create-personagem.dto";

export class PersonagemRepository {
    public async listar() {
        try {
            
        } catch (error: any) {
            return handleError(error);
        }
    };

    public async incluir() {
        try {
            
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