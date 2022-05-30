import { GrupoTipo, TurnoGrupo } from "./../../interfaces/data.interface";
import { Component } from "@angular/core";
import { intercambiarHorarios } from "../../utils/turno-utils";

@Component({
  selector: "app-data",
  templateUrl: "data.component.html",
})
export class DataComponent {
  public horaSeleccionada: string = "";
  public page: number = 0;
  public turnoNumero: number = 0;
  constructor() {}
  data: TurnoGrupo[] = [
    {
      activo: true, //activo
      horario: {
        horarioMin: 800,
        horarioMax: 1559,
      },
      encargado: "Miguel Diaz",
      contenido: "Las pizzas salen con mucho queso y poca sal",
      tipo: GrupoTipo.FIJO,
    },
    {
      activo: true,
      horario: {
        horarioMin: 1600,
        horarioMax: 2359,
      },
      encargado: "Alejandro Perez",
      contenido: "Las pizzas salen con orégano y la masa es abundante",
      tipo: GrupoTipo.FIJO,
    },
    {
      activo: true,
      horario: {
        horarioMin: 0,
        horarioMax: 759,
      },
      encargado: "Cristian Benvenuto",
      contenido:
        "Las pizzas salen tostadas y la salsa queda sin amargor ni acidez",
      tipo: GrupoTipo.FIJO,
    },
    {
      activo: false,
      horario: {
        horarioMin: -1,
        horarioMax: -1,
      },
      encargado: "Arianna Pardo",
      contenido: "Las pizzas quedan agridulces y bien adornadas",
      tipo: GrupoTipo.DINAMICO,
    },
  ];

  cambiarHorario(turnoACambiar: number): Boolean {
    let ponerTurnoEnDescanso = () => {
      const tempArray: TurnoGrupo[] = Object.assign([], this.data);
      let turnoTemp = tempArray[turnoACambiar - 1];
      tempArray[turnoACambiar - 1] = tempArray[3];
      tempArray[3] = turnoTemp;
      tempArray[turnoACambiar - 1].activo = true;
      tempArray[3].activo = false;

      intercambiarHorarios(tempArray[turnoACambiar - 1], tempArray[3]);
      this.data = tempArray;
    };
    if (this.data[turnoACambiar - 1].tipo == GrupoTipo.DINAMICO) {
      ponerTurnoEnDescanso();
      return true;
    } else {
      if (this.data[3].tipo != GrupoTipo.DINAMICO) {
        let turnoEnDescanso = -1;
        this.data.forEach((value, index) => {
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
