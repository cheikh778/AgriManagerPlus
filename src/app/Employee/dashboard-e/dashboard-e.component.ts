import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-e',
  templateUrl: './dashboard-e.component.html',
  styleUrls: ['./dashboard-e.component.scss']
})
export class DashboardEComponent {

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

}
