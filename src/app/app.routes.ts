import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((component) => component.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
