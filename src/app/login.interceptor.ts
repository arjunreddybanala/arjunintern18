import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  appUrl: string = '';
  userId: any;
  hid = false;
  constructor() {
    // this.appUrl=environment.baseUrl;
    this.userId = sessionStorage.getItem('session_id');

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpURL = `${this.appUrl}${request.url}`;
    let UsrDtls: any = JSON.parse(<string>sessionStorage.getItem('lgnUserDlts'))
    if (UsrDtls && UsrDtls.jwtToken && !httpURL.includes('nojwt')) {
      request = request.clone({ setHeaders: { Authorization: `&{UsrDtls.jwtToken}` } })
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 417) {
          // this.ngx.stop()
          // this.toastr.error(err.error.message);
          console.log(err.message);
          alert("417")
        }
        const error = err.error;
        return throwError(error);
      }),
    );
  }
}
