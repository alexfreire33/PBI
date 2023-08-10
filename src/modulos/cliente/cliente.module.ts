import { Module } from '@nestjs/common';
import { ClienteController } from './http/controllers/cliente.controller';
import { ClienteService } from './service/cliente.service';
import { PrismaModule } from '../../comum/prisma/prisma.module';
import { IClienteRepository } from './dominio/interfaces/cliente.repository';
import { ClienteRepository } from './infra/repositorio/cliente.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClienteController],
  providers: [ClienteService,ClienteRepository,
    {
      provide: IClienteRepository,
      useExisting: ClienteRepository,
    }],
})
export class ClienteModule {}
