import { ITurnoGrupo, GrupoTipo } from "../interfaces/data.interface";
import { Injectable } from "@angular/core";
import { intercambiarHorarios } from "../utils/turno-utils";
import { FactoryService } from "./factory.service";

@Injectable({
  providedIn: "root",
})
export class CambiarHorarioService {
  private _data: ITurnoGrupo[] = this.factory.createTurno();

  get data(): ITurnoGrupo[] {
    return [...this._data];
  }

  constructor(public factory: FactoryService) {}

  cambiar(turnoACambiar: number): Boolean {
    let ponerTurnoEnDescanso = () => {
      const tempArray: ITurnoGrupo[] = Object.assign([], this._data);

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
