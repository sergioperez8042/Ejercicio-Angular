import { ITurnoGrupo } from '../interfaces/data.interface';


export let intercambiarHorarios = (turno1: ITurnoGrupo, turno2: ITurnoGrupo) => {
    let turnoTemp = turno1.horario;
    turno1.horario = turno2.horario;
    turno2.horario = turnoTemp; 
}
   
