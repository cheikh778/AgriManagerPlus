import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/materiel.service';
import { Materiel } from 'src/app/modeles';

@Component({
  selector: 'app-ajout-materiel',
  templateUrl: './ajout-materiel.component.html',
  styleUrls: ['./ajout-materiel.component.scss']
})
export class AjoutMaterielComponent {
  material : Materiel = {
    materielId:0,
    nom:'',
    description: '',
    type: '',
    quantite: 0,
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private materielService: MaterielService, private _router: Router) {}

    
  submitForm() {
    console.log('Formulaire soumis', this.material);

    
      this.materielService.ajouterMaterial(this.material).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';

          setTimeout(() => {
            this._router.navigate(['listeMateriel']);
            
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
