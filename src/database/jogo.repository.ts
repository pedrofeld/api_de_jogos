import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreateJogoDto } from "../dtos/create-jogo.dto";

export class JogoRepository {
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