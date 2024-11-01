import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
   // Hardcoded credentials
   readonly validUsername = 'admin';
   readonly validPassword = 'password123';
   constructor(private router: Router) {}

   onLogin() {
     if (this.username === this.validUsername && this.password === this.validPassword) {
       // Redirect to dashboard or home page upon successful login
       this.router.navigate(['/dashboard']);
     } else {
       this.errorMessage = 'Invalid username or password';
     }
   }
 }
