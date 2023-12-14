import { CanMatchFn } from '@angular/router';

//It works for all the routes - single and children
export const canMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};
