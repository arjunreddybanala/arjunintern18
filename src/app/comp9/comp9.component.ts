import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp9.component.html',
  styleUrl: './comp9.component.css'
})
export class Comp9Component  {
  // private apiUrl = "https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars";
  // constructor(private http: HttpClient) {

  // }
  // ngOnInit(): void {
  //   this.getData()
  // }
  // PostData: any;
  // getData() {
  //   return this.http.get(this.apiUrl).subscribe((res: any) => {
  //     this.PostData = res.data
  //   })
  // }

}
