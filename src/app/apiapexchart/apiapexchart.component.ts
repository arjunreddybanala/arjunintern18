import { NgApexchartsModule } from "ng-apexcharts";
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
} from "ng-apexcharts";
import { ApiapexchartService } from "../apiapexchart.service";
import { map, Observable } from 'rxjs';
import { text } from "stream/consumers";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { title } from "process";
export type ChartOptions = {
  series: ApexAxisChartSeries | any | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  responsive: ApexResponsive[] | any;
  xaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  tooltip: ApexTooltip | any;

};

@Component({
  selector: 'app-apiapexchart',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, RouterModule],
  templateUrl: './apiapexchart.component.html',
  styleUrl: './apiapexchart.component.css'
})
export class ApiapexchartComponent implements OnInit {
  payLoad: any;

  @ViewChild("chart") chart: ChartComponent | undefined;
  public ChartOptions!: Partial<ChartOptions>;



  private apiUrl = "https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars";

  ngOnInit(): void {
    this.getData()
  }
  PostData: any;
  getData() {
    return this.http.get(this.apiUrl).subscribe((res: any) => {
      this.PostData = res.data
    })
  }


  constructor(public http: HttpClient) {
     this.ChartOptions = {
      series: [
        {
          name: "CAR A",

        },
        {
          name: "CAR B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "CAR C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "CAR D",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          vertical: true
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "CAR 1",
          "CAR 2",
          "CAR 3",
          "CAR 4",
          "CAR 5"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

  }

}
// getLoadingData() {
//     this.apexChartService.getData(this.payLoad).subscribe(
//       {
//         next: (res) => {
//           console.log(res)
//         },
//         error: (error) => {
//           console.log(error.error)
//         }
//       }
//     )
//   }
// this.fetchData().subscribe(data => {
//     this.ChartOptions.series=[{
//       name:'value',
//       data:data.map((item:any)=>[new Date(item.timestop).getTime(),item.value])
//     }]
//   })

//
// this.getData(data)
//
// private apiApexChartService: ApiapexchartService,

// fetchData(): Observable<any> {
//   return this.http.get<any>('http://onlinetestapi.gerasim.in/api/Mock/GetAllEmployees');
// }
