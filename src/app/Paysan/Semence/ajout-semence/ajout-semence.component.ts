import { Component } from '@angular/core';
import { SemenceService } from 'src/app/semence.service';
import { Router } from '@angular/router';
import { Semence } from 'src/app/modeles';



@Component({
  selector: 'app-ajout-semence',
  templateUrl: './ajout-semence.component.html',
  styleUrls: ['./ajout-semence.component.scss']
})
export class AjoutSemenceComponent {



  semence : Semence = {
    id:0,
    nom:'',
    description: '',
    typeSemence: '',
    quantite: 0,
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private semenceService: SemenceService, private _router: Router) {}

    
  submitForm() {
    console.log('Formulaire soumis', this.semence);

    // const userId = this.authService.getId();
    // this.cdr.detectChanges();

      this.semenceService.ajouterSemence(this.semence).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';
          // this.router.navigate(['listeSemence']);

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
