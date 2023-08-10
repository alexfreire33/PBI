import { Decimal } from "@prisma/client/runtime/library";
import { v4 as uuidv4 } from "uuid";

export class PesagemEntity {
  readonly cd_pesagem: string;
  cd_cliente: string;
  fl_ativo: boolean;
  vl_peso: Decimal;
  dt_cadastro?: Date;

  constructor(props: Omit<PesagemEntity, "cd_pesagem">, cd_pesagem?: string) {
    Object.assign(this, props);
    this.cd_pesagem = cd_pesagem || uuidv4();
    this.cd_cliente = props.cd_cliente;
    this.fl_ativo = props.fl_ativo;
    this.vl_peso = props.vl_peso;
    this.dt_cadastro = new Date;
  }
}
