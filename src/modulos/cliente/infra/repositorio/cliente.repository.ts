/* eslint-disable prefer-const */

import { Injectable } from '@nestjs/common';
import { cliente, Prisma } from '@prisma/client';
import { PrismaService } from '../../../../comum/prisma/prisma.service';

import { ClienteEntity } from '../../dominio/entidades/cliente.entity';
import { IClienteRepository } from '../../dominio/interfaces/cliente.repository';

@Injectable()
export class ClienteRepository implements IClienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(any: ClienteEntity): Promise<ClienteEntity> {
    const createCliente = <cliente>await this.prisma.cliente.create({
      data: {
        ...ClienteEntity,
      },
    });
    return createCliente;
  }
}
