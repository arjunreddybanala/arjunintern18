import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThirdpartywedgetService {
  http = inject(HttpClient)

  // constructor(private http: HttpClient) { }
  thirdPartyWedgetService(): Observable<any> {
    return this.http.get(environment.baseUrl + environment.thrdPwdgt)

  }
}
