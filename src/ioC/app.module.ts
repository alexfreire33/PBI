import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
