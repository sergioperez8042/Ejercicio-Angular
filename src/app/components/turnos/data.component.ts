import { Component } from "@angular/core";
import { CambiarHorarioService } from "../../strategies-services/cambiar-horario.service";

@Component({
  selector: "app-data",
  templateUrl: "data.component.html",
})
export class DataComponent {
  public horaSeleccionada: string = "";
  public page: number = 0;
  public turnoNumero: number = 0;

  get dataTurnos() {
    return this.turnoService.data;
  }
  constructor(public turnoService: CambiarHorarioService) { }

  cambiarHorario() {
    return this.turnoService.cambiar(this.turnoNumero);
  }

}
