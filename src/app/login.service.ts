import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  // private loginUrl='https://freeapi.miniprojectideas.com/api/User/Login'

  onLogin(payload: any): Observable<any> {
    return this.http.post(environment.baseUrl + environment.login, payload)
  }
}
