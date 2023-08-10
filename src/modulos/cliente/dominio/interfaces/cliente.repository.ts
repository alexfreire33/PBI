import { ClienteEntity } from "../entidades/cliente.entity";

export interface IClienteRepository {
  create(any: ClienteEntity): Promise<ClienteEntity>;

}

export const IClienteRepository = Symbol("IClienteRepository");
