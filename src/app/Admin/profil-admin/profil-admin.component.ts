import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})
export class ProfilAdminComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

}
