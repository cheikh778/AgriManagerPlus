import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'app-password-paysan',
  templateUrl: './password-paysan.component.html',
  styleUrls: ['./password-paysan.component.scss']
})
export class PasswordPaysanComponent {

  changePassword =  this.builder.group({
    currentPassword: this.builder.control('', Validators.required),
    newPassword: this.builder.control('', Validators.required),
    confirmationPassword: this.builder.control('', Validators.required),
});

constructor(private service: LoginPageService, private _router: Router,
  private builder: FormBuilder) {}



  successMessage: string | undefined;
  errorMessage: string | undefined;


  submitForm() {
    console.log('Formulaire soumis', this.changePassword.value);
    this.service.changePassword(this.changePassword.value).subscribe(
      response => {
        console.log(this.changePassword.value);
        console.log('Ajout réussi', response);
        this.successMessage = 'Mot de passe modifié avec succès.';

        // setTimeout(() => {
        //   this._router.navigate(['/login']);
        // }, 2000);
      },
        error => {
          if (error.error.status === 500) {
            console.log("message erreur",error.error);
            this.errorMessage = error.error.message; // Display the error message sent from the server
          } else {
            this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard.';
          }
          console.log(this.changePassword.value, error);
          
        }
    );
  }
  status = false;

  addToggle() {
    this.status = !this.status;
  }

}
