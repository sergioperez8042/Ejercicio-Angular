import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";

export class Turno2 implements ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: 1600,
      horarioMax: 2359,
    };
    this.encargado =  "Alejandro Perez";
    this.contenido = "Las pizzas salen con orégano y la masa es abundante";
    this.activo = true;
    this.tipo = GrupoTipo.FIJO;
  }
}


