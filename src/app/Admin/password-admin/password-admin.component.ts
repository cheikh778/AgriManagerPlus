import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/login-page.service';

@Component({
  selector: 'app-password-admin',
  templateUrl: './password-admin.component.html',
  styleUrls: ['./password-admin.component.scss']
})
export class PasswordAdminComponent {

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
        this.successMessage = 'Inscription réussie. Vous pouvez maintenant vous connecter.';

        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      },
        error => {
       
            this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
            console.log(this.changePassword.value, error);
          
        }
    );
  }
  status = false;

  addToggle() {
    this.status = !this.status;
  }

}
