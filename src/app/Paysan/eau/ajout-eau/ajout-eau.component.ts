import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EauService } from 'src/app/eau.service';
import { Eau } from 'src/app/modeles';

@Component({
  selector: 'app-ajout-eau',
  templateUrl: './ajout-eau.component.html',
  styleUrls: ['./ajout-eau.component.scss']
})
export class AjoutEauComponent {
  eau : Eau = {
    eauId:0,
    source:'',
    quantite: 0,
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private eauService: EauService, private _router: Router) {}

    
  submitForm() {
    console.log('Formulaire soumis', this.eau);

    // const userId = this.authService.getId();
    // this.cdr.detectChanges();

      this.eauService.ajouterEau(this.eau).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';
           this._router.navigate(['listeEau']);
        },
      error => {
        console.error('Erreur lors de l\'ajout', error);
        this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
      }
    );

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
