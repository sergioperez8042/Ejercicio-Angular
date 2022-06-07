import { GrupoTipo } from "../interfaces/data.interface";
import { TurnoBase } from "./turno";

export class Turno3 extends TurnoBase {
  constructor() {
    super();
    this.horario.horarioMin = 0;
    this.horario.horarioMax = 759;

    this.encargado = "Cristian Benvenuto";
    this.contenido =
      "Las pizzas salen tostadas y la salsa queda sin amargor ni acidez";
    this.activo = true;
    this.obtenerTurno();
  }
  override obtenerTurno(): string {
    {
      return (this.tipo = GrupoTipo.FIJO);
    }
  }
}
