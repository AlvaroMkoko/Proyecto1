import { AlumnoService } from './../service/alumno.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../model/alumno';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.css'
})
export class AlumnoFormComponent implements OnInit {

  titulo: string = 'Datos de los alumnos';
  alumno: Alumno = new Alumno();

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private alumnoService :AlumnoService
  ) { }

  ngOnInit(): void {
    this.mostrarAlumno();
  }

  mostrarAlumno(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.alumnoService.leerAlumno(id).subscribe(
          (elalumno) => (this.alumno = elalumno

          )
        )
      }
    })
  }

  registrarAlumno(): void {
    this.alumnoService.crearAlumno(this.alumno).subscribe(
      (elalumno) => {
        this.router.navigate(['/listadoAlumnos']);
      }
    )
  }
  actualizarAlumno(): void {
    this.alumnoService.actualizarAlumno(this.alumno).subscribe(
      (elalumno) => {
        this.router.navigate(['/listadoAlumnos']);
      }
    )

    Swal.fire('Alumno Actualizada',
      `Alumno ${this.alumno.nombreAlumno} actualizada con éxito`,
      'success'
    );
  }

}
