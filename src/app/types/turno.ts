import {
  ITurnoGrupo,
  GrupoTipo,
  IHorarioRango,
} from "../interfaces/data.interface";

export class TurnoBase implements ITurnoGrupo {
  horario: IHorarioRango;
  encargado: string;
  contenido: string;
  activo: boolean;
  tipo: GrupoTipo;

  constructor() {
    this.horario = {
      horarioMin: 0,
      horarioMax: 0,
    };
    this.encargado = "";
    (this.contenido = ""), (this.activo = true);
    this.tipo = GrupoTipo.FIJO;
    this.obtenerTurno();
  }
  comportarse(): void {
    throw new Error("Method not implemented.");
  }
  obtenerTurno(): string {
    return "";
  }
}
