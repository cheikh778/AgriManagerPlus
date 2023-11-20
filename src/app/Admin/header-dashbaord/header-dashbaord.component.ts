import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'header-dashbaord',
  templateUrl: './header-dashbaord.component.html',
  styleUrls: ['./header-dashbaord.component.scss']
})
export class HeaderDashbaordComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  constructor(private authService: LoginPageService) {} // Injection du service AuthService

  logout() {
    this.authService.doLogout(); // Appel de la méthode doLogout() du service AuthService
  }
  
}
