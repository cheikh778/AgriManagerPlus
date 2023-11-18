import { Component } from '@angular/core';

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
}
