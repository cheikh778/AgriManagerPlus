import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'app-dashboard-p',
  templateUrl: './dashboard-p.component.html',
  styleUrls: ['./dashboard-p.component.scss']
})
export class DashboardPComponent {

  status = false;

  addToggle()
  {
    this.status = !this.status;
  }

  showNotificationDropdown = false;
  showProfileDropdown = false;


  toggleNotificationDropdown() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showNotificationDropdown = false;
  }

  constructor(private authService: LoginPageService) {} // Injection du service AuthService
  
  logout() {
    this.authService.doLogout(); // Appel de la méthode doLogout() du service AuthService
  }
  }
