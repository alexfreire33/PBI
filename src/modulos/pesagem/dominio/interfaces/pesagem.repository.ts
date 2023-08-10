import { cliente } from "@prisma/client";
import { PesagemEntity } from "../entidades/pesagem.entity";

export interface IPesagemRepository {
  create(any: PesagemEntity): Promise<PesagemEntity>;

}

export const IPesagemRepository = Symbol("IPesagemRepository");
