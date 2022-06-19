import { IComportamiento, ITurnoGrupo } from "../interfaces/data.interface";

export class Pizzeria implements IComportamiento{
    turnos: ITurnoGrupo[];


    constructor() { 

        this.turnos = []; 
    }
    mostrarComportamiento(): void {
        throw new Error("Method not implemented.");
    }

}