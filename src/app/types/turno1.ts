import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";
import { TurnoBase } from "./turno";

export class Turno1 extends TurnoBase {
  constructor() {
    super();
    this.horario.horarioMin = 800;
    this.horario.horarioMax = 1559;
    this.encargado = "Miguel Diaz";
    this.contenido = "Las pizzas salen con mucho queso y poca sal";
    this.activo = true;
    this.tipo = GrupoTipo.FIJO;
  }
}
