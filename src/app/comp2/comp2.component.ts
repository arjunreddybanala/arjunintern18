import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor(private http: HttpClient) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height:350,
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

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


}
