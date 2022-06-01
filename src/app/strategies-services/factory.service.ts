import { Injectable } from "@angular/core";
import { ITurnoGrupo} from "../interfaces/data.interface";
import { Turno1 } from "../types/turno1";
import { Turno2 } from "../types/turno2";
import { Turno3 } from "../types/turno3";
import { Turno4 } from "../types/turno4";

@Injectable({
  providedIn: "root",
})
export class FactoryService {
  constructor() {}

  public createTurno(): ITurnoGrupo[] {
    return [new Turno1(), new Turno2(), new Turno3(), new Turno4()];
  }
}
