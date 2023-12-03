import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelleAgricole } from 'src/app/modeles';
import { ParcelleAgricoleService } from 'src/app/parcelle-agricole.service';

@Component({
  selector: 'app-ajout-parcelle-agricole',
  templateUrl: './ajout-parcelle-agricole.component.html',
  styleUrls: ['./ajout-parcelle-agricole.component.scss']
})
export class AjoutParcelleAgricoleComponent {
  
  parcelle : ParcelleAgricole = {
    parcelle_id:0,
    parcelle_nom:'',
    parcelle_description: '',
    parcelle_location: '',
    parcelle_type: '',
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private parcelleService: ParcelleAgricoleService, private _router: Router) {}

    
  submitForm() {
    console.log('Formulaire soumis', this.parcelle);

    // const userId = this.authService.getId();
    // this.cdr.detectChanges();

      this.parcelleService.ajouterParcelleAgricole(this.parcelle).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';
          this._router.navigate(['listeParcelle']);

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
