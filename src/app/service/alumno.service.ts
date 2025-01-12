import { Alumno } from '../model/Alumno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private urlEndPoint: string = "https://escomcarreras.onrender.com/apiAlumnos/alumno";
  private httpHeaders = new HttpHeaders(
    { ContentType: 'application/json' }
  );

  constructor(private http: HttpClient) { }

  mostrarAlumnos(): Observable<Alumno[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(map((response) => response as Alumno[]));
  }

  crearAlumno(carrera: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.urlEndPoint,
      carrera,
      {
        headers: this.httpHeaders,
      }
    );
  }

  leerAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.urlEndPoint}/${id}`);
  }

  eliminarAlumno(id: number): Observable<Alumno> {
    return this.http.delete<Alumno>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders
    });

  }

  actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(
      `${this.urlEndPoint}/${alumno.idAlumno}`,
      alumno
      ,
      {
        headers: this.httpHeaders
      }
    )
  }

}
