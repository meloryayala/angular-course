import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from "@angular/common";
import {provideHttpClient} from "@angular/common/http";

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ]
};
