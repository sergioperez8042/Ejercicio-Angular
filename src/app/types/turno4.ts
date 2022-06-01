import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";

export class Turno4 implements ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: -1,
      horarioMax: -1,
    };
    this.encargado = "Arianna Pardo",
    this.contenido = "Las pizzas quedan agridulces y bien adornadas",
    this.activo = false;
    this.tipo = GrupoTipo.DINAMICO;
  }
}
