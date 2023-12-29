import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user = {
    email : '',
    password : '',
    role : '',
    token:''
  };
  // errorMessage = '';
  // successMessage = '';



  constructor(private authService: LoginPageService,
    private _router: Router) {}

  submitForm() {
    console.log('Formulaire soumis', this.user);
    this.authService.signIn(this.user)



  }

  get errorMessage(): string {
    const message = this.authService.errorMessage;


    if (message) {

      setTimeout(() => {
        this.authService.clearErrorMessage();
      }, 2000);
    }

    return message;

  }

  get successMessage(): string {
    return this.authService.successMessage;
  }

  clearMessages() {
    this.authService.errorMessage = '';
    this.authService.successMessage = '';
  }
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
