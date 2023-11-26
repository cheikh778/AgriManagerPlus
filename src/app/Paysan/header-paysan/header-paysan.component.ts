import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';


@Component({
  selector: 'headerPaysan',
  templateUrl: './header-paysan.component.html',
  styleUrls: ['./header-paysan.component.scss']
})
export class HeaderPaysanComponent {
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
