import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarreraComponent } from './carrera/carrera.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarreraComponent,CarreraFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}
