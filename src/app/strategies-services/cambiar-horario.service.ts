import { ITurnoGrupo, GrupoTipo } from "../interfaces/data.interface";
import { Injectable } from "@angular/core";
import { intercambiarHorarios } from "../utils/turno-utils";
import { FactoryService } from "./factory.service";

@Injectable({
  providedIn: "root",
})
export class CambiarHorarioService {
  private _turno1: ITurnoGrupo= this.factory.createTurno(800, 1559,"FIJO");
  private _turno2: ITurnoGrupo= this.factory.createTurno(1600, 2359,"FIJO");
  private _turno3: ITurnoGrupo= this.factory.createTurno(0, 759,"FIJO");
  private _turno4: ITurnoGrupo= this.factory.createTurno(-1, -1, "DINAMICO");
  private _data: ITurnoGrupo[] = [this._turno1, this._turno2, this._turno3, this._turno4];

  get data(): ITurnoGrupo[] {
    return [...this._data];
  }
  constructor(public factory: FactoryService) {}

  cambiar(turnoACambiar: number): boolean {
    let ponerTurnoEnDescanso = () => {
      const tempArray: ITurnoGrupo[] = Object.assign([], this._data);
      console.log(tempArray);

      let turnoTemp = tempArray[turnoACambiar - 1];
      tempArray[turnoACambiar - 1] = tempArray[3];
      tempArray[3] = turnoTemp;
      tempArray[turnoACambiar - 1].activo = true;
      tempArray[3].activo = false;

      intercambiarHorarios(tempArray[turnoACambiar - 1], tempArray[3]);
      this._data = tempArray;
    };
    if (this.data[turnoACambiar - 1].tipo == GrupoTipo.DINAMICO) {
      ponerTurnoEnDescanso();
      return true;
    } else {
      if (this.data[3].tipo != GrupoTipo.DINAMICO) {
        let turnoEnDescanso = -1;
        this.data.forEach((value: { tipo: GrupoTipo }, index: number) => {
          if (value.tipo == GrupoTipo.DINAMICO) {
            turnoEnDescanso = index + 1;
          }
        });
        alert("Ya hay un turno en descanso. Turno: " + turnoEnDescanso);
        return false;
      }
      ponerTurnoEnDescanso();
      return true;
    }
  }
}
