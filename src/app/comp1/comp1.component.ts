import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { ApexchartService } from '../apexchart.service';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { HttpClient } from "@angular/common/http";
import { ApiapexchartService } from "../apiapexchart.service";

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
  selector: 'app-comp1',
  standalone: true,
  imports: [NgApexchartsModule, RouterModule, CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component implements OnChanges{
  icon = faRotate;

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;


  constructor(public apexChartService: ApexchartService, private apiApexChart:ApiapexchartService) {
    // this.getLoadingData();

    // first chart
    this.chartOptions1 = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
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
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
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


    // secound chart
    this.chartOptions2 =
    {
      series: this.chartOptions1.series,
      chart: this.chartOptions1.chart,
      plotOptions:
      {
        bar: {
          horizontal: true
        }
      },
      stroke: this.chartOptions1.stroke,
      xaxis: this.chartOptions1.xaxis,
      fill: this.chartOptions1.fill,
      legend:
      {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
//   ngOnInit(): void {
// this.apiApexChart.apiApexChart().subscribe((data: any) => {
//       this.chartOptions1.series.data = data.data.map((item:any)=>item.year);
//       console.log(this.chartOptions1.series.data)
//     })
//   }
  @Input() isRotate: boolean = true;
  isVertical = true
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["isRotate"]) {
      this.isVertical = changes['isRotate'].currentValue;
    }
  }
  rotateButton() {
    this.isVertical = !this.isVertical
  }
  payLoad: any
}

  // getLoadingData() {
  //   this.apexChartService.getData(this.payLoad).subscribe(
  //     {
  //       next: (res) => {
  //         console.log(res)
  //       },
  //       error: (error) => {
  //         console.log(error.error)
  //       }
  //     }
  //   )
  // }
// async landingData() {
//   await this.apexChartService.getLandingSummary(payLoad).subscribe(res => {
//     this.apexChartService = res.data;
//   })
// }
// this.http.get('https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly').subscribe({
//   next:(res)=>{
//     console.log(res);
//   },
//   error:(error)=>{
//     console.log(error.error)
//   }
//series
// {
//   name: "PRODUCT A",
//   data: [44, 55, 41, 67, 22, 43]
// },
// {
//   name: "PRODUCT B",
//   data: [13, 23, 20, 8, 13, 27]
// },
// {
//   name: "PRODUCT C",
//   data: [11, 17, 15, 15, 21, 14]
// },
// {
//   name: "PRODUCT D",
//   data: [21, 7, 25, 13, 22, 8]
// }
//chart
//  {
//   type: "bar",
//   height: 350,
//   stacked: true
// }
//storke
//  {
//   width: 1,
//   colors: ["#fff"]
// }
// title: {
//   text: "Fiction Books Sales"
// },
//xaxis
// {
//   categories: [
//     "01/2011",
//     "02/2011",
//     "03/2011",
//     "04/2011",
//     "05/2011",
//     "06/2011"]
// labels: {
//   formatter: function (val: string) {
//     return val + "K";
//   }
// }
// }
// yaxis: {
//   title: {
//     text: undefined
//   }
// },
// tooltip: {
//   y: {
//     formatter: function (val: string) {
//       return val + "K";
//     }
//   }
// },
//fill
//  {
//   opacity: 1
// }

