import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProductsComponent} from "./pages/products/products.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
  {
    path: 'products/:id',
    title: 'Products',
    component: ProductsComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
