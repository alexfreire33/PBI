/* eslint-disable prefer-const */

import { Injectable } from '@nestjs/common';
import { pesagem } from '@prisma/client';
import { PrismaService } from 'src/comum/prisma/prisma.service';
import { IPesagemRepository } from '../../dominio/interfaces/pesagem.repository';
import { PesagemEntity } from '../../dominio/entidades/pesagem.entity';

@Injectable()
export class PesagemRepository implements IPesagemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: PesagemEntity): Promise<PesagemEntity> {
    const addPeso = <pesagem> await this.prisma.pesagem.create({
      data: {
        cd_pesagem: entity.cd_pesagem,
        cd_cliente: entity.cd_cliente,
        fl_ativo: entity.fl_ativo,
        vl_peso: entity.vl_peso,
        dt_cadastro: entity.dt_cadastro,
      },
    });
    return addPeso;
  }
}
