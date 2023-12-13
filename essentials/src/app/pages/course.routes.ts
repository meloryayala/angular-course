import {Routes} from '@angular/router';

export const courseroutes: Routes = [

  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home.component'),

  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about/about.component'),
  },
  {
    path: 'products/:id',
    title: 'Products',
    loadComponent: () => import('./products/products.component'),
  },
]
