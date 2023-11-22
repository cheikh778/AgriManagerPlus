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
    nom: '',
    prenom: '',
    contact: '',
    email: '',
    password: '',
    role: 'client',
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private registerService: RegisterPageService, private _router: Router) {}

  submitForm() {
    console.log('Formulaire soumis', this.user);
    this.registerService.inscription(this.user).subscribe(
      response => {
        console.log('Ajout réussi', response);
        this.successMessage = 'Inscription réussie. Vous pouvez maintenant vous connecter.';

        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      },
      error => {
        console.error('Erreur lors de l\'ajout', error);
        this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
        console.log(this.user);
      }
    );
  }
}
