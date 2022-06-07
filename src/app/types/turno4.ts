import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";
import { TurnoBase } from "./turno";

export class Turno4 extends TurnoBase {
  constructor() {
    super();
    this.horario.horarioMin = -1;
    this.horario.horarioMax = -1;
    this.encargado = "Arianna Pardo";
    this.contenido = "Las pizzas quedan agridulces y bien adornadas";

    this.activo = false;
    this.obtenerTurno();
  }
  override obtenerTurno(): string {
    {
      return this.tipo = GrupoTipo.DINAMICO;
    }

  }
}