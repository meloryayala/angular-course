import { Routes } from '@angular/router';
import {canActivateChildGuard} from "./guard/can-activate-child.guard";
import {canMatchGuard} from "./guard/can-match.guard";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/course.routes').then( p => p.courseRoutes),
    // canActivateChild: [canActivateChildGuard]
    canMatch: [canMatchGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  }
];
