import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-a',
  templateUrl: './dashboard-a.component.html',
  styleUrls: ['./dashboard-a.component.scss']
})
export class DashboardAComponent {

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

}
