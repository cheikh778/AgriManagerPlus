import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageService } from '../register-page.service';
import { FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user =  this.builder.group({
      nom: this.builder.control('', Validators.required),
      prenom: this.builder.control('', Validators.required),
      contact: this.builder.control('', Validators.required),
      email: this.builder.control('', [Validators.required, Validators.email]),
      password: this.builder.control('', Validators.required),
      photo: this.builder.control('indefini'),
    role:  this.builder.control('client'),
  });

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private registerService: RegisterPageService, private _router: Router,
    private builder: FormBuilder) {}

  submitForm() {
    console.log('Formulaire soumis', this.user.value);
    this.registerService.inscription(this.user.value).subscribe(
      response => {
        console.log('Ajout réussi', response);
        this.successMessage = 'Inscription réussie. Vous pouvez maintenant vous connecter.';

        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      },
        error => {
          if(error.status === 409){
            console.error('Erreur lors de l\'ajout', error);
            this.errorMessage = 'Cette email existe déja';
          }else{
            this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
            console.log(this.user, error);
          }
        }
    );
  }
}
