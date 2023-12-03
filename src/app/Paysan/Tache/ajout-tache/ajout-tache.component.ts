import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.scss']
})
export class AjoutTacheComponent {

  tache : Tache = {
    idTache:0,
    nomTache:'',
    description: '',
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private tacheService: TacheService, private _router: Router) {}


  submitForm() {
    console.log('Formulaire soumis', this.tache);

      this.tacheService.ajouterTache(this.tache).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';
          setTimeout(() => {
            this._router.navigate(['listeTache']);

          }, 2000);

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
