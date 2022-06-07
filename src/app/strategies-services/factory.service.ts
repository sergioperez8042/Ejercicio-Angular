import { Injectable } from "@angular/core";
import { GrupoTipo, ITurnoGrupo } from "../interfaces/data.interface";
import { TurnoBase } from "../types/turno";
import { Turno1 } from "../types/turno1";
import { Turno2 } from "../types/turno2";
import { Turno3 } from "../types/turno3";
import { Turno4 } from "../types/turno4";

@Injectable({
  providedIn: "root",
})
export class FactoryService {
  constructor() {}

  public createTurno(horarioMin: number, horarioMax: number, tipo: string
  ): ITurnoGrupo {
    if (horarioMin == 800 && horarioMax == 1559 && tipo == "FIJO") {
      let horarioACambiar = new Turno1();
      horarioACambiar.obtenerTurno();
      return horarioACambiar;
    } else if (horarioMin == 1600 && horarioMax == 2359 && tipo == "FIJO") {
      let horario = new Turno2();
      let horarioACambiar = new TurnoBase();
      horarioACambiar.obtenerTurno();
      return horario;
    } else if (horarioMin == 0 && horarioMax == 759 && tipo == "FIJO") {
      let horario = new Turno3();
      let horarioACambiar = new TurnoBase();
      horarioACambiar.obtenerTurno();
      return horario;
    } else if (horarioMin == -1 && horarioMax == -1 && tipo == "DINAMICO") {
      let horario = new Turno4();
      let horarioACambiar = new TurnoBase();
      horarioACambiar.obtenerTurno();
      return horario;
    }
    return new TurnoBase();
  }
}
