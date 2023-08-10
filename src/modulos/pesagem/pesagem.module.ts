import { Module } from '@nestjs/common';

import { PrismaModule } from '../../comum/prisma/prisma.module';
import { PesagemController } from './http/controllers/pesagem.controller';
import { PesagemService } from './service/pesagem.service';
import { PesagemRepository } from './infra/repositorio/pesagem.repository';
import { IPesagemRepository } from './dominio/interfaces/pesagem.repository';


@Module({
  imports: [PrismaModule],
  controllers: [PesagemController],
  providers: [PesagemService,PesagemRepository,
    {
      provide: IPesagemRepository,
      useExisting: PesagemRepository,
    }],
})
export class PesagemModule {}
