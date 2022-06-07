import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";
import { CambiarHorarioService } from "../strategies-services/cambiar-horario.service";
import { FactoryService } from "../strategies-services/factory.service";

export class TurnoBase implements ITurnoGrupo {
  public horarioACambiar: number = 0;
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: 0,
      horarioMax: 0,
    };
    this.encargado = "";
    (this.contenido = ""), (this.activo = true);
    this.tipo = GrupoTipo.FIJO;
    this.obtenerTurno();
  }
  obtenerTurno(): string {
      return " ";
  }
  
}
 
  

