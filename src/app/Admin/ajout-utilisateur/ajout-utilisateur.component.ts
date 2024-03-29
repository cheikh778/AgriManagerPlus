import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageService } from 'src/app/register-page.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent {

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
  
  user = {
    nom : '',
    prenom : '',
    contact : '',
    email : '',
    password : '',
    role : '',
  };



  constructor(private registerService: RegisterPageService,
    private _router: Router) {}

  submitForm() {
    console.log('Formulaire soumis', this.user); // Vérifiez si les données sont correctes
    this.registerService.inscription(this.user).subscribe(
      response => {
        console.log('Ajout réussi', response);
        // this.authService.setAuthToken(response.accessToken);

        // this._router.navigate(['/inscription'])
        // Faire quelque chose avec la réponse
      },
      error => {
        console.error('Erreur lors de l\'ajout', error);
        console.log(this.user)
        // Gérer l'erreur
      }
    );
  }
}
