import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ThirdpartywedgetService } from '../thirdpartywedget.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-thirdpartywedget',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './thirdpartywedget.component.html',
  styleUrl: './thirdpartywedget.component.css'
})
export class ThirdpartywedgetComponent implements OnInit {
  wedgetData: any;
  constructor(private router: Router, private thirdpartyservice: ThirdpartywedgetService, private toastrservice: ToastrService) { }
  ngOnInit(): void {
    this.getTrdPtyWed();
  }

  getTrdPtyWed() {

    this.thirdpartyservice.thirdPartyWedgetService().subscribe({
      next: (res: any) => {
        if (res.status == "OK") {
          this.wedgetData = res.data;
          this.toastrservice.success("Data retrived sucessfully")
          // console.log(res.data)
        }
        else {
          console.log(res.message);
          this.toastrservice.warning("Something went wrong")

        }
      },
      error: (error: any) => {
        console.log(error.error);
        this.toastrservice.error("Error")

      }
    })
  }
  home() {
    this.router.navigate(['/shwp-home'])
  }

}
