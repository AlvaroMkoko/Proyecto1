import { Routes } from '@angular/router';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { CarreraComponent } from './carrera/carrera.component';

export const routes: Routes = [
  {path:'listadoCarreras',component:CarreraComponent},
  {path:'carreraForm',component:CarreraFormComponent},
  {path:'carreraForm/:id',component:CarreraFormComponent}
];
