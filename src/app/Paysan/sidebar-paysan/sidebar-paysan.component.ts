import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-paysan',
  templateUrl: './sidebar-paysan.component.html',
  styleUrls: ['./sidebar-paysan.component.scss']
})
export class SidebarPaysanComponent {


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
}
