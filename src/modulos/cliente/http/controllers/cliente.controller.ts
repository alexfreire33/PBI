import { Controller, Get } from '@nestjs/common';
import { ClienteService } from '../../service/cliente.service';

@Controller()
export class ClienteController {
  constructor(private readonly appService: ClienteService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
