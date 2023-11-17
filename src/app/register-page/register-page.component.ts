import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageService } from '../register-page.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user = {
    nom : '',
    prenom : '',
    contact : '',
    email : '',
    password : '',
    role : 'client',
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
