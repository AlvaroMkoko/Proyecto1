import { Routes } from '@angular/router';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { CarreraComponent } from './carrera/carrera.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

export const routes: Routes = [
  {path:'listadoCarreras',component:CarreraComponent},
  {path:'carreraForm',component:CarreraFormComponent},
  {path:'carreraForm/:id',component:CarreraFormComponent},
  {path:'listadoAlumnos',component:AlumnoComponent},
  {path:'alumnoForm',component:AlumnoFormComponent},
  {path:'alumnoForm/:id',component:AlumnoFormComponent}
];
