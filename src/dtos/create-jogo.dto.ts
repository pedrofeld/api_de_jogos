import { Decimal } from "@prisma/client/runtime/library";

export interface CreateJogoDto {
    nome: string
    genero: string;
    preco: Decimal;
    tamanho: number;
    dataLancamento: Date
    multiplayer: boolean
}