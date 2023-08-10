import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ClienteService } from '../../service/cliente.service';
import { CriarClienteDto } from '../dto/cliente/criarClliente.dto';
import { ClienteEntity } from '../../dominio/entidades/cliente.entity';

@Controller() // Defina o caminho da rota como 'cliente'

export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  getHello(): string {
    return this.clienteService.getHello();
  }
  
  @Post("/cliente/criar")
  criarCliente(@Body() cliente: CriarClienteDto): Promise<CriarClienteDto>  {
     return this.clienteService.criarCliente(cliente);
  }

  @Post("/dispositivo/vincular")
  vincularDispositivo(@Body() cliente: CriarClienteDto): Promise<CriarClienteDto>  {
     return this.clienteService.criarCliente(cliente);
  }

}
