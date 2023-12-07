import { Component } from '@angular/core';

@Component({
  selector: 'app-password-paysan',
  templateUrl: './password-paysan.component.html',
  styleUrls: ['./password-paysan.component.scss']
})
export class PasswordPaysanComponent {
  status = false;

  addToggle() {
    this.status = !this.status;
  }

}
