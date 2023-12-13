import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/course.routes').then( p => p.courseroutes),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  }
];
