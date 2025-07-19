import { Decimal } from "@prisma/client/runtime/library";

export interface UpdateJogoDto {
    nome?: string;
    genero?: string;
    preco?: Decimal;
    tamanho?: number;
    dataLancamento?: Date
    multiplayer?: boolean
}