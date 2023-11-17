import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/login-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user = {
    email : '',
    password : '',
    role : '',
    token:''
  };



  constructor(private authService: LoginPageService,
    private _router: Router) {}

  submitForm() {
    console.log('Formulaire soumis', this.user); // Vérifiez si les données sont correctes
    this.authService.signIn(this.user)
    //.subscribe(
    // .subscribe(
    //   response => {
    //     console.log('Ajout réussi', response);
    //     // this.authService.setAuthToken(response.accessToken);

    //     // this._router.navigate(['/inscription'])
    //     // Faire quelque chose avec la réponse
    //   },
    //   error => {
    //     console.error('Erreur lors de l\'ajout', error);
    //     console.log(this.user)
    //     // Gérer l'erreur
    //   }
   // );
  //  (response: any) => {
  //   console.log('Connexion réussie', response);
  //   const role = response.role; // Récupérez le rôle de la réponse
    // Faites quelque chose avec le rôle, par exemple, redirigez en fonction du rôle.
//     if (role === 'admin') {
//       this._router.navigate(['/admin']);
//     } else if (role === 'client') {
//       this._router.navigate(['/client']);
//     } else {
//       this._router.navigate(['/paysan']);
//     }
//   },
//   error => {
//     console.error('Erreur lors de la connexion', error);
//     // Gérez l'erreur
//   }
// );
  }
}
