import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  resetPassword: FormGroup; // Declare resetPassword as FormGroup
  cle: string | undefined;

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(
    private service: UserServiceService,
    private route: ActivatedRoute,
    private _router: Router,
    private builder: FormBuilder
  ) {
    this.resetPassword = this.builder.group({
      newPassword: ['', Validators.required],
      confirmationPassword: ['', Validators.required],
      cleRestore: [''], // Initialize with cle or an empty string
    });
  }

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.cle = params['cle'];
  //     console.log('cle de restoration', this.cle);
  //   });
  // }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cle = params['cle'];
      console.log('cle de restoration', this.cle);

      // Update cleRestore value after cle is retrieved
      this.resetPassword.patchValue({
        cleRestore: this.cle || '',
      });
    });
  }

  submitForm() {
    console.log('Formulaire soumis', this.resetPassword.value);
    this.service.changePassword(this.resetPassword.value).subscribe(
      response => {
        console.log(this.resetPassword.value);
        console.log('Ajout réussi', response);
        this.successMessage = 'Inscription réussie. Vous pouvez maintenant vous connecter.';

        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      },
      error => {
        this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
        console.log(this.resetPassword.value, error);
      }
    );
  }
}
