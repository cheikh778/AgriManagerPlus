import { Component } from '@angular/core';

@Component({
  selector: 'app-password-admin',
  templateUrl: './password-admin.component.html',
  styleUrls: ['./password-admin.component.scss']
})
export class PasswordAdminComponent {

  status = false;

  addToggle() {
    this.status = !this.status;
  }

}
