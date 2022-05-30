import { TurnoGrupo } from '../interfaces/data.interface';


export let intercambiarHorarios = (turno1: TurnoGrupo, turno2: TurnoGrupo) => {
    let turnoTemp = turno1.horario;
    turno1.horario = turno2.horario;
    turno2.horario = turnoTemp; 
}
   
