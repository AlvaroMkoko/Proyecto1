import { CarreraService } from './../service/carrera.service';
import { Component, inject, OnInit } from '@angular/core';
import { Carrera } from '../model/Carrera';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent implements OnInit {

  titulo: string = 'El Listado de Carreras';
  lasCarreras: Carrera[] = [];

  constructor(private carreraService: CarreraService) { }

  httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.carreraService.mostrarCarreras()
      .subscribe(
        (carreras) => (this.lasCarreras = carreras)
      )
  }

  delete(carrera: Carrera): void {
    this.carreraService.eliminarCarrera(carrera.idCarrera).subscribe(
      (resultado) => this.carreraService.mostrarCarreras()
        .subscribe(
          (losResultados) => (this.lasCarreras = losResultados)
        )
    )
  }

}
