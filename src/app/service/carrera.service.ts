import { Carrera } from './../model/Carrera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private urlEndPoint: string = "https://escomcarreras.onrender.com/apiCarreras/carreras";
  private httpHeaders = new HttpHeaders(
    { ContentType: 'application/json' }
  );

  constructor(private http: HttpClient) { }

  mostrarCarreras(): Observable<Carrera[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(map((response) => response as Carrera[]));
  }

  crearCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(this.urlEndPoint,
      carrera,
      {
        headers: this.httpHeaders,
      }
    );
  }

  leerCarrera(id: number): Observable<Carrera> {
    return this.http.get<Carrera>(`${this.urlEndPoint}/${id}`);
  }

  eliminarCarrera(id: number): Observable<Carrera> {
    return this.http.delete<Carrera>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders
    });

  }

  actualizarCarrera(carrera: Carrera): Observable<Carrera> {
    return this.http.put<Carrera>(
      `${this.urlEndPoint}/${carrera.idCarrera}`,
      carrera
      ,
      {
        headers: this.httpHeaders
      }
    )
  }

}
