import { Inject, Injectable } from '@nestjs/common';
import { AddPesoDto } from '../http/dto/pesagem/addPeso.dto';
import { IPesagemRepository } from '../dominio/interfaces/pesagem.repository';
import { PesagemEntity } from '../dominio/entidades/pesagem.entity';

@Injectable()
export class PesagemService {



  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    @Inject(IPesagemRepository)
    private readonly pesagemRepository: IPesagemRepository,
  ) {}

  async adicionaPeso(pesoDto: AddPesoDto) {
    const entidadeMontada = new PesagemEntity(
      {
        cd_cliente: pesoDto.cd_cliente,
        fl_ativo: pesoDto.fl_ativo,
        vl_peso: pesoDto.vl_peso
      }
    );
    
    const novoCliente = await this.pesagemRepository.create(entidadeMontada);

    return novoCliente;
  }
}
