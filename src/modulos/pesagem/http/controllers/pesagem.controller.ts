import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AddPesoDto } from '../dto/pesagem/addPeso.dto';
import { PesagemService } from '../../service/pesagem.service';

@Controller('pesagem') // Defina o caminho da rota como 'cliente'

export class PesagemController {
  constructor(private readonly pesagemService: PesagemService) {}

  @Get()
  getHello(): string {
    return this.pesagemService.getHello();
  }
  
  @Post()
  criarCliente(@Body() pesagem: AddPesoDto): Promise<AddPesoDto>  {
     return this.pesagemService.adicionaPeso(pesagem);
  }

}
