import { Carrera } from "./Carrera";

export class Alumno{
	idAlumno : number = 0;
	paternoAlumno : string = '';
	maternoAlumno : string = '';
	nombreAlumno : string = '';
	emailAlumno : string = '';
	fechaNacimiento :  Date = new Date();
	idCarrera :Carrera = new Carrera();
}