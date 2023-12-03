import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'header-dashboard',
  templateUrl: './header-dashbaord.component.html',
  styleUrls: ['./header-dashbaord.component.scss']
})
export class HeaderDashbaordComponent {

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
