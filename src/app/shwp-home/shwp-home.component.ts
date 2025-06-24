import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-shwp-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './shwp-home.component.html',
  styleUrl: './shwp-home.component.css'
})
export class ShwpHomeComponent {
  // loginname: any = JSON.parse(<string>sessionStorage.getItem('lgnUsrDtls'))
  constructor(private router: Router, private toastr: ToastrService) {
  }
  logout() {
    this.router.navigate(['/login']);
    this.toastr.warning("Logout successful")
  }
  thirdPartyWedget() {
    this.router.navigate(['/thirdpartywedget'])

  }
}
