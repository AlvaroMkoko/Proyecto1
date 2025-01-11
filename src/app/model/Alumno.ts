export class Alumno {
    idAlumno: number = 0; // Identificador del alumno
    paternoAlumno: string = ''; // Apellido paterno del alumno
    maternoAlumno: string = ''; // Apellido materno del alumno
    nombreAlumno: string = ''; // Nombre del alumno
    emailAlumno: string = ''; // Correo electrónico del alumno
    fechaNacimiento: Date = new Date(); // Fecha de nacimiento del alumno
    idCarrera: number = 0; // Identificador de la carrera asociada al alumno
}