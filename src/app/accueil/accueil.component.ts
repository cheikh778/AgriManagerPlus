import { Component, OnInit } from '@angular/core';
import { DemandeValidationProjetService } from '../demande-validation-projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

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

  texts: string[] = ["Bienvenue Sur Notre Plateforme", "AgriManager+"];
  textIndex: number = 0;
  charIndex: number = 0;
  isAdding: boolean = true;
  welcomeText: string = '';
  agriManagerText: string = '';

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const currentText = this.texts[this.textIndex];

    if (this.isAdding) {
      if (this.textIndex === 0) {
        this.welcomeText = currentText.slice(0, this.charIndex);
      } else {
        this.agriManagerText = currentText.slice(0, this.charIndex);
      }

      this.charIndex++;

      if (this.charIndex > currentText.length) {
        if (this.textIndex < this.texts.length - 1) {
          this.textIndex++;
          this.charIndex = 0;
          setTimeout(() => this.animateText(), 1000);
          return;
        }

        this.isAdding = false;
        setTimeout(() => this.animateText(), 2000);
        return;
      }
    } else {
      if (this.textIndex === 0) {
        this.welcomeText = currentText.slice(0, this.charIndex);
      } else {
        this.agriManagerText = currentText.slice(0, this.charIndex);
      }

      this.charIndex--;

      if (this.charIndex === 0) {
        if (this.textIndex > 0) {
          this.textIndex--;
          this.charIndex = this.texts[this.textIndex].length;
          setTimeout(() => this.animateText(), 1000);
          return;
        }

        this.isAdding = true;
        setTimeout(() => this.animateText(), 1000);
        return;
      }
    }

    const randomSpeed = 100 + Math.random() * 100;
    setTimeout(() => this.animateText(), this.isAdding ? randomSpeed : 50);
  }
}
