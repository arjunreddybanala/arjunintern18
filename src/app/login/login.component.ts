import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  roleId: any
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      loginname: ['', Validators['required']],
      password: ['', Validators['required']]
    });
  }
  isSuccess: boolean = false;
  http = inject(HttpClient)
  onSubmit() {
    if (this.loginForm.valid) {
      this.login();
    }
    else {
      // alert("Enter all feilds")
      this.toastr.error("Enter all feilds")
    }
  }
  login() {
    let payLoad = this.loginForm.getRawValue();
    this.loginService.onLogin(payLoad).subscribe({
      next: (res: any) => {
        if (res) {
          // alert("Login succesfully");
          this.toastr.success("Login successfully")
          console.log(res);
          this.router.navigate(['/shwp-home'])

        }
        else {
          // alert("Invalid user")
          this.toastr.warning("Invalid user")
          console.log(res.message)
        }
      },
      error: (error: any) => {
        if (error.status = "EXPECTATION_FAILED") {
          // alert("Invalid Credentials")
          this.toastr.warning("Invalid Credentials")


        }
        else {
          alert("Error");
          console.log(error.error);
          console.log(error.message);
        }

      }
    })

  }
  // let payload = this.loginForm;
  // this.http.post("https://shwpdev.dhanushinfotech.com/shwp/login",this.loginForm).subscribe({
  //   next: (res: any) => {
  //     if (res.status == 'OK') {
  //       sessionStorage.setItem('lgnUSerDtls', JSON.stringify(res.data));
  //       var userLgnDtls: any = JSON.parse(<string>sessionStorage.getItem('lgnUSerDtls'));
  //       this.roleId = userLgnDtls.userRoleMappingList[0].role.id;
  //     }
  //   },
  //   error: (err: any) => {
  //     console.error(err.message);
  //       alert("417");
  //   }
  // })
  get error(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
}
// this.loginService.onLogin(payload).subscribe((res: any) => {
//   if (res.status == 'OK') {
//     sessionStorage.setItem('lgnUSerDtls', JSON.stringify(res.data));
//     var userLgnDtls: any = JSON.parse(<string>sessionStorage.getItem('lgnUSerDtls'));
//     this.roleId = userLgnDtls.userRoleMappingList[0].role.id;
//   }
// })


// next:(res:any)=>{
//       console.log(res)
//       if(res.status == 'OK'){
//         console.log("Success")
//       }
//     },
//     error:(error:any)=>{
//       console.log(error.message)
//     }
// this.isSuccess = true
// if (this.loginForm.invalid) {
//   return this.error;
// }
// else {
//   this.isSuccess = true;
//   const storedUses = localStorage.getItem('users');
//   let storedUserArray = [];
//   if (storedUses) {
//     storedUserArray = JSON.parse(storedUses);
//     for (let user of storedUserArray) {
//       if (this.loginForm.value.userName === user.username && this.loginForm.value.password === user.password) {
//         alert("login successfull");
//         return true;
//       }
//     }
//   }
//   console.log(this.loginForm.value);
//   alert("user not found");
//   return false;
// }
// this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginForm).subscribe((res: any) => {
//     if (res.reslut) {
//       alert("Login successfully")
//       }
//       else {
//       console.log(res.message)
//       }
//   })