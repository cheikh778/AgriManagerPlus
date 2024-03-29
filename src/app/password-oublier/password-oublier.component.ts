import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-oublier',
  templateUrl: './password-oublier.component.html',
  styleUrls: ['./password-oublier.component.scss']
})
export class PasswordOublierComponent {

  emailUser =  this.builder.group({
    email: this.builder.control('', Validators.email),
  
});

constructor(private service: UserServiceService, private _router: Router,
  private builder: FormBuilder) {}



  successMessage: string | undefined;
  errorMessage: string | undefined;


  submitForm() {
    console.log('Formulaire soumis', this.emailUser.value);
    this.service.getCleRestoration(this.emailUser.value.email).subscribe(
      response => {
        console.log(this.emailUser.value);
        console.log('Demande envoyé', response);
        this.successMessage = 'Demande de reinitialisation de mot de passe envoyée avec succés. Verifier votre boite dee messagerie et clqurz sur le lien.';

        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      },
        error => {
       
            this.errorMessage = 'Une erreur s\'est produite lors de l\'envois de la demande. Veuillez réessayer plus tard'; 
            console.log(this.emailUser.value, error);
          
        }
    );
  }
}
