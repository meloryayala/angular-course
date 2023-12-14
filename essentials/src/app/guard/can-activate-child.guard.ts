import { CanActivateChildFn } from '@angular/router';

//It works with children routes
export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log(childRoute, state);

  return true;
};
