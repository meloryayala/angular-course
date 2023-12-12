import {HttpErrorResponse, HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {catchError, retry, shareReplay, throwError} from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('full-stack-life', 'dev');

  const reqCLone = req.clone({ headers });
  return next(reqCLone).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000 }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
      alert('You have no internet connection!')
      }
      return throwError(() => error);
    })
  );
};
