import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shwp-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './shwp-home.component.html',
  styleUrl: './shwp-home.component.css'
})
export class ShwpHomeComponent {
  username: any;
  constructor(private router: Router, private toastr: ToastrService) { }
  getData() {
    this.username = localStorage.getItem('data.name')
  }
  logout() {
    this.router.navigate(['/login']);
    this.toastr.warning("Logout successful")
  }

}
