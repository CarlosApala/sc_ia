import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./page/profesionales/personal/personal.component').then(
        (m) => m.PersonalComponent
      ),
  },

  {
    path: 'profesionales',
    loadComponent: () =>
      import('./page/profesionales/profesionales.component').then(
        (m) => m.ProfesionalesComponent
      ),
  },
];
