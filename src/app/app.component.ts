import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarreraComponent } from './carrera/carrera.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarreraComponent,CarreraFormComponent,AlumnoComponent,AlumnoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}
