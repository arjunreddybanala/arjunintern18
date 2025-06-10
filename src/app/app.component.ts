import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
/**
 dataRetrived:boolean=true;
  if (this.loginForm.valid) {
      const storedUser = localStorage.getItem('users');
      let usersStoredArray = [];
      if (storedUser) {
        usersStoredArray = JSON.parse(storedUser);
      }
      for (const user of usersStoredArray) {
        if (this.loginForm.value.userName === user.username && this.loginForm.value.password === user.password) {
          console.log(this.loginForm.value);
          this.loginForm.reset();
          alert("login successfull");
        }
        else {
          alert("User not found")
        }
      }
    }
    else {
      alert("Enter all fields")
    }

     get error(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
*/
