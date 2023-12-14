import { CanActivateFn } from '@angular/router';

//It works only with single route
export const canActivateGuard: CanActivateFn = (route, state) => {
  console.log(route, state);

  return true;
};
