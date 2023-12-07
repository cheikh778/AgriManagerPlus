import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'header-employe',
  templateUrl: './header-employe.component.html',
  styleUrls: ['./header-employe.component.scss']
})
export class HeaderEmployeComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  constructor(private authService: LoginPageService) {} 

  logout() {
    this.authService.doLogout(); 
  }

}
