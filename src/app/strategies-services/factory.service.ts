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

  public createTurno(horarioMin: number, horarioMax: number): ITurnoGrupo {
    if (horarioMin == 800 && horarioMax == 1559) {
      return new Turno1();
    } else if (horarioMin == 1600 && horarioMax == 2359) {
      return new Turno2();
    } else if (horarioMin == 0 && horarioMax == 759) {
      return new Turno3();
    } else if (horarioMin == -1 && horarioMax == -1) {
      return new Turno4();
    }
    return new TurnoBase();
  }
}
