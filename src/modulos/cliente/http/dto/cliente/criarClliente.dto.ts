import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarClienteDto {
  @IsString()
  readonly cd_cliente: string;
  @IsString()
  nm_cliente: string;
  @IsString()
  nr_cpf: string;
  //@IsEmail({}, { message: "EMAIL_INVALIDO" })
  @IsString()
  email: string;

}
