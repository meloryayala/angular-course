import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from "@angular/common";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpInterceptor} from "./interceptor/http.interceptor";

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({
      paramsInheritanceStrategy: 'always',
    })),
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ]
};
