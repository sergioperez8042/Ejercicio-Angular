import {ITurnoGrupo,GrupoTipo, IHorarioRango} from "../interfaces/data.interface";

export class Turno1 implements ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: 800,
      horarioMax: 1559,
    };
    this.encargado ="Miguel Diaz";
    this.contenido = "Las pizzas salen con mucho queso y poca sal";
    this.activo = true;
    this.tipo = GrupoTipo.FIJO;
  }
}
   
