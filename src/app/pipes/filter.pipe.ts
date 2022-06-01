import { Pipe, PipeTransform } from "@angular/core";
import { ITurnoGrupo } from "../interfaces/data.interface";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(data: ITurnoGrupo[], horaSeleccionada: string = ""): any {
    if (horaSeleccionada == "") return false;
    return data.filter((turno) => {
      horaSeleccionada = horaSeleccionada.replace(":", "");
      let horaSeleccionadaNumber = parseInt(horaSeleccionada);

      return (
      horaSeleccionadaNumber >= turno.horario.horarioMin && horaSeleccionadaNumber <= turno.horario.horarioMax
      );
    });
  }
}
