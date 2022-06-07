import { GrupoTipo } from "../interfaces/data.interface";
import { TurnoBase } from "./turno";

export class Turno2 extends TurnoBase {
  constructor() {
    super();
    this.horario.horarioMin = 1600;
    this.horario.horarioMax = 2359;
    this.encargado = "Alejandro Pérez";
    this.contenido = "Las pizzas salen con orégano y la masa es abundante";
    this.activo = true;
    this.obtenerTurno();
  }
  override obtenerTurno(): string {
    {
      return (this.tipo = GrupoTipo.FIJO);
    }
  }
}
