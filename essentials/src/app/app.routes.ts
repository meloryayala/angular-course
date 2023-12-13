import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component'),

      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./pages/about/about.component'),
      },
      {
        path: 'products/:id',
        title: 'Products',
        loadComponent: () => import('./pages/products/products.component'),
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  }
];
