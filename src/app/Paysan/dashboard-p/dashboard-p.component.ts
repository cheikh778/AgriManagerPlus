import { Component } from '@angular/core';

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
  }
