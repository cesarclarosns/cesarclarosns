import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { ThemeService } from './services/theme.service';
import { AppService } from './services/app.service';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // Application-wide providers
    {
      provide: ThemeService,
      useClass: ThemeService,
    },
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: CookieService,
      useClass: CookieService,
    },
  ],
};
