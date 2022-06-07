import { CambiarHorarioService } from "../strategies-services/cambiar-horario.service";

export interface IHorarioRango {
  horarioMin: number;
  horarioMax: number;
}
export enum GrupoTipo {
  FIJO = "FIJO",
  DINAMICO = "DINAMICO",
}
export interface IData {
  results: ITurnoGrupo[];
}

export interface ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;
  obtenerTurno(): string;
 
}


