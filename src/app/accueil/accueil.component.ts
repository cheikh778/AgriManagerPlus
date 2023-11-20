import { Component } from '@angular/core';
<<<<<<< HEAD
import { DemandeValidationProjetService } from '../demande-validation-projet.service';
import { Router } from '@angular/router';
=======
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

<<<<<<< HEAD
  demande = {
    nomComplet : '',
    email : '',
    nomProjet : '',
    description : '',
    status : 'en_attente'

  }

  constructor(private demandeService: DemandeValidationProjetService,
    private _router: Router) {}

  demandeValidation() {
    console.log('Formulaire soumis', this.demande); // Vérifiez si les données sont correctes
    this.demandeService.demande(this.demande).subscribe(
      response => {
        console.log('Demande Envoyer', response);
        // this.authService.setAuthToken(response.accessToken);

        // this._router.navigate(['/inscription'])
        // Faire quelque chose avec la réponse
      },
      error => {
        console.error('Erreur lors de la demande', error);
        console.log(this.demande)
        // Gérer l'erreur
      }
    );
  }
=======
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772
}
