import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ClienteModule } from "src/modulos/cliente/cliente.module";
import { PesagemModule } from "src/modulos/pesagem/pesagem.module";

@Module({
  imports: [
    ClienteModule,
    PesagemModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
