import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function handleError(error: any){
    // erros por parte do cliente
    if (error instanceof PrismaClientKnownRequestError) {
        console.log(`Erro [$error.code}]: ${error.message}`);
        return null;
    }
    console.log(error);
    return null;
}