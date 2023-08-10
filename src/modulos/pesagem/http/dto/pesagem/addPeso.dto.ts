import { Decimal } from '@prisma/client/runtime/library';
import { IsBoolean, IsString } from 'class-validator';

export class AddPesoDto {
  @IsString()
  cd_cliente: string;
  @IsBoolean()
  fl_ativo: boolean;
  @IsString()
  vl_peso: Decimal;
  
}
