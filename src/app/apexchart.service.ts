import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApexchartService {
  icon: any;
  constructor() { }
  public http!: HttpClient;
  // getData(payLoad: any): Observable<any> {
  //   return this.http.get(environment.apiapexchart, payLoad)
  // }
}
// apexChartRotate(): Observable<any> {
//   return this.http.get("")
//private http: HttpClient
//
// }
// getData():Observable<any>{
//
// }
// getChartData() {
//   return this.http.get<any>("https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly").pipe((map((res: any) => {
//     return res.data;
//   })))
// }
// : Observable<any>
