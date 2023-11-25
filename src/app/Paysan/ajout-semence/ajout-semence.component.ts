// ajout-semence.ts

import { Component, OnInit } from '@angular/core';
import { SemenceService } from '../../semence.service';
import { Semence } from '../../modeles';
import { LoginPageService } from '../../login-page.service';

@Component({
  selector: 'app-ajout-semence',
  templateUrl: './ajout-semence.component.html',
  styleUrls: ['./ajout-semence.component.scss']
})
export class AjoutSemenceComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  status = false;
  showNotificationDropdown = false;
  showProfileDropdown = false;

  addToggle() {
    this.status = !this.status;
  }

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
