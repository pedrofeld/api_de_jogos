import { Decimal } from "@prisma/client/runtime/library";

export interface CreateJogoDto {
    genero: string;
    preco: Decimal;
    tamanho: number;
    dataLancamento: Date
    multiplayer: boolean
}