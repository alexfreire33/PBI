import { Module } from '@nestjs/common';
import { ClienteController } from './http/controllers/cliente.controller';
import { ClienteService } from './service/cliente.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class AppModule {}
