import {ITurnoGrupo,GrupoTipo,IHorarioRango} from "../interfaces/data.interface";

export class Turno3 implements ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: 0,
      horarioMax: 759,
    };
    this.encargado = "Cristian Benvenuto";
    this.contenido = "Las pizzas salen tostadas y la salsa queda sin amargor ni acidez";
    this.activo = true;
    this.tipo = GrupoTipo.FIJO;
  }
}
