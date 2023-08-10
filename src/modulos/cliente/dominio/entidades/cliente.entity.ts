import { v4 as uuidv4 } from "uuid";


export class ClienteEntity {
  readonly cd_cliente: string;
  nm_cliente: string;
  nr_cpf: string;
  email: string;

  constructor(props: Omit<ClienteEntity, "cd_cliente">, cd_cliente?: string) {
    Object.assign(this, props);
    this.cd_cliente = cd_cliente || uuidv4();
    this.nm_cliente = props.nm_cliente;
    this.nr_cpf = props.nr_cpf;
    this.email = props.email;

  }

  // public somenteNumeros(valor: string){
  //   return valor.match(/\d+/g);
  // } 
}
