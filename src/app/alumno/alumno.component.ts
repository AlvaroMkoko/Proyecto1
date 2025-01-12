import { Alumno } from '../model/Alumno';
import { AlumnoService } from './../service/alumno.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit {

  titulo: string = 'El Listado de Alumnos';
  losAlumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.alumnoService.mostrarAlumnos()
      .subscribe(
        (alumno) => (this.losAlumnos = alumno)
      )
  }

  delete(alumno: Alumno): void {
    this.alumnoService.eliminarAlumno(alumno.idAlumno).subscribe(
      (resultado) => this.alumnoService.mostrarAlumnos()
        .subscribe(
          (losResultados) => (this.losAlumnos = losResultados)
        )
    )
  }

}
