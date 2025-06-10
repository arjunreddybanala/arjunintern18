import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ['', Validators['required']],
      password: ['', Validators['required']]
    });
  }
  isSuccess: boolean = false;
  onSubmit() {
    this.isSuccess = true
    if (this.loginForm.invalid) {
      return this.error;
    }
    else {
      this.isSuccess = true;
      const storedUses = localStorage.getItem('users');
      let storedUserArray = [];
      if (storedUses) {
        storedUserArray = JSON.parse(storedUses);
        for (let user of storedUserArray) {
          if (this.loginForm.value.userName === user.username && this.loginForm.value.password === user.password) {
            alert("login successfull");
            return true;
          }
        }
      }
      console.log(this.loginForm.value);
      alert("user not found");
      return false;
    }
  }
  get error(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }

}
