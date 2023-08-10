import { Inject, Injectable } from '@nestjs/common';
import { CriarClienteDto } from '../http/dto/cliente/criarClliente.dto';
import { IClienteRepository } from '../dominio/interfaces/cliente.repository';
import { ClienteEntity } from '../dominio/entidades/cliente.entity';

@Injectable()
export class ClienteService {
  constructor( @Inject(IClienteRepository) private readonly clientesRepository: IClienteRepository) {}

  getHello(): string {
    return 'Hello World!';
  }
 
  async criarCliente(clienteDto: CriarClienteDto){
    const address = new ClienteEntity(clienteDto);

    const { ...clienteInfo } = clienteDto;
    const novoCliente = await this.clientesRepository.create(clienteInfo);

    return novoCliente;
  }
}


