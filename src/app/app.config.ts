import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginInterceptor } from './login.interceptor';
import { LoginComponent } from './login/login.component';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(), provideToastr(), provideClientHydration(), provideHttpClient(), { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }, ToastrService]
};
