import { CarreraService } from './../service/carrera.service';
import { Component, OnInit } from '@angular/core';
import { Carrera } from '../model/Carrera';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrera-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carrera-form.component.html',
  styleUrl: './carrera-form.component.css'
})
export class CarreraFormComponent implements OnInit {

  titulo: string = 'Datos de la Carrera';
  carrera: Carrera = new Carrera();

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private carreraService :CarreraService
  ) { }

  ngOnInit(): void {
    this.mostrarCarrera();
  }

  mostrarCarrera(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.carreraService.leerCarrera(id).subscribe(
          (laCarrera) => (this.carrera = laCarrera

          )
        )
      }
    })
  }

  registrarCarrera(): void {
    this.carreraService.crearCarrera(this.carrera).subscribe(
      (laCarrera) => {
        this.router.navigate(['/listadoCarreras']);
      }
    )
  }
  actualizarCarrera(): void {
    this.carreraService.actualizarCarrera(this.carrera).subscribe(
      (laCarrera) => {
        this.router.navigate(['/listadoCarreras']);
      }
    )

    Swal.fire('Carrera Actualizada',
      `Carrera ${this.carrera.nombreCarrera} actualizada con éxito`,
      'success'
    );
  }

}
