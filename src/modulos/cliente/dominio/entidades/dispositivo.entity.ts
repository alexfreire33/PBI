
import { v4 as uuidv4 } from "uuid";


export class DispositivoEntity {
  readonly cd_dispositivo: string;


  constructor(props: Omit<DispositivoEntity, "cd_dispositivo">, cd_dispositivo?: string) {
    Object.assign(this, props);
    this.cd_dispositivo = cd_dispositivo || uuidv4();
  }

  // public somenteNumeros(valor: string){
  //   return valor.match(/\d+/g);
  // } 
}
