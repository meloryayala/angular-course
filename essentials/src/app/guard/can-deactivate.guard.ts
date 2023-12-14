import {CanDeactivateFn} from '@angular/router';
import ProductsComponent from "../pages/products/products.component";

export const canDeactivateGuard: CanDeactivateFn<ProductsComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.form.get('name')?.dirty) {
    return confirm('Are you sure, do you want to leave?')
  }
  return true;
};
