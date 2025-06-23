import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiapexchartService {
  constructor(private http: HttpClient) { }
  // getLandingSummary(payLoad:any):Observable<any>{
  //   return this.http.post(environment.baseUrl+environment.landing,payLoad)
  // }
}
// private apiApexUrl = "https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars";
// private url="https://jsonplaceholder.typicode.com/posts";
// private apiUrl = 'https://quickchart.io/apex-charts/render';
// private yearApiUrl='https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly';
// apiApexChart(): Observable<any[]> {
//   return this.http.get<any[]>(this.yearApiUrl)
// }
// private url="https://jsonplaceholder.typicode.com/posts"
// constructor(private http:HttpClient) { }
// getLeelaData(){
//   return this.http.get<Post[]>(this.url)
// }
// public http!: HttpClient;
// getData(payLoad: any): Observable<any> {
//   return this.http.post(environment.apiapexchart, payLoad)
// }
// export interface Post{
//   userId:number;
//   id:number;
//   title:string;
//   body:string
// }
// getChartData(): Observable<any> {
//   return this.http.get(environment.apiapexchart);
// }
// private http!: HttpClient;
// private apiUrl = 'https://quickchart.io/apex-charts/render';
//  getChartData() {
//     throw new Error("Method not implemented.");
//   }
// getThrdPartyWdgt(): Observable<any> {
//   return this.http.get(environment.baseUrl + environment.thrdPwdgt)
// }

