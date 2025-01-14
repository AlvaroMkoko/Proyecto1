import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Router } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export class NavbarComponent {
  constructor(private router: Router) {}
  
  navegarA(ruta: string){
    this.router.navigate([ruta])
  }
}