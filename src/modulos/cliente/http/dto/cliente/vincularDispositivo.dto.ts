import { IsString } from 'class-validator';

export class VincularClienteDto {
  @IsString()
  readonly cd_cliente: string;
}
