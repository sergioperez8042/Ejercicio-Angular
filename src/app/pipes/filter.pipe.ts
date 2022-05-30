import { Pipe, PipeTransform } from "@angular/core";
import { TurnoGrupo } from "../interfaces/data.interface";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(data: TurnoGrupo[], horaSeleccionada: string = "", page: number = 0): any {
    // debugger;
    if (horaSeleccionada == "") return false;
    return data.filter((turno) => {

      horaSeleccionada = horaSeleccionada.replace(":", "");
      let horaSeleccionadaNumber = parseInt(horaSeleccionada);
      // debugger;
       return (
         horaSeleccionadaNumber >= turno.horario.horarioMin &&
         horaSeleccionadaNumber <= turno.horario.horarioMax
       );
     });

  }
}
