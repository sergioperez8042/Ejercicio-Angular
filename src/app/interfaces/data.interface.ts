export interface HorarioRango {
  horarioMin: number;
  horarioMax: number;
}
export enum GrupoTipo {
  FIJO = "FIJO",
  DINAMICO = "DINAMICO",
}
export interface DataT {
  results: TurnoGrupo[]; //cambiar nombre
}

export interface TurnoGrupo {
  horario: HorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;
}
