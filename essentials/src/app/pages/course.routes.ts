import {Routes} from '@angular/router';
import {canActivateGuard} from "../guard/can-activate.guard";
import {canDeactivateGuard} from "../guard/can-deactivate.guard";

export const courseRoutes: Routes = [

  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home.component'),

  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about/about.component'),
    canActivate: [canActivateGuard]
  },
  {
    path: 'products/:id',
    title: 'Products',
    loadComponent: () => import('./products/products.component'),
    canDeactivate: [canDeactivateGuard]
  },
]
