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

  
}
