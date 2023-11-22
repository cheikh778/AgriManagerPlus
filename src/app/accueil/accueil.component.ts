import { Component } from '@angular/core';
import { DemandeValidationProjetService } from '../demande-validation-projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  demande = {
    nomComplet: '',
    email: '',
    nomProjet: '',
    description: '',
    status: 'en_attente'
  };

  message: string | undefined;
  messageError: string |undefined;

  constructor(private demandeService: DemandeValidationProjetService, private _router: Router) {}

  demandeValidation() {
    console.log('Formulaire soumis', this.demande);

    this.demandeService.demande(this.demande).subscribe(
      response => {
        console.log('Demande Envoyée', response);
        this.message = 'La demande a été envoyée avec succès.Vous Pouvez fermer la fenêtre de demande';

      },
      error => {
        console.error('Erreur lors de la demande', error);
        this.messageError = 'Une erreur s\'est produite lors de l\'envoi de la demande. Veuillez réessayer plus tard';
        console.log(this.demande);

      }
    );
  }
}
