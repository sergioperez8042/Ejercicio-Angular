import { Turno } from './turnos-class';



export class TurnoDinamico extends Turno{
    constructor(
        public override horario: string,
    ){
        super(
          "4",
          horario,
          "Arianna Pardo",
          "Las pizzas quedan agridulces y bien adornadas"
        );
    }
}