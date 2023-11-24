// ajout-semence.ts

import { Component, OnInit } from '@angular/core';
import { SemenceService } from '../../semence.service';
import { Semence } from '../../modeles';
import { LoginPageService } from '../../login-page.service';

@Component({
  selector: 'app-ajout-semence',
  templateUrl: './ajout-semence.component.html',
  styleUrls: ['./ajout-semence.component.scss']
})
export class AjoutSemenceComponent implements OnInit {
  status = false;

  addToggle()
  {
    this.status = !this.status;
  }

  showNotificationDropdown = false;
  showProfileDropdown = false;


  toggleNotificationDropdown() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showNotificationDropdown = false;
  }

  nouvelleSemence: Semence = {
    id: 0, // L'ID sera généré côté serveur
    nom: '',
    description: '',
    typeSemence: '',
    quantite: 0,
    paysan_id: null // Vous déciderez comment obtenir l'utilisateur connecté ici
  };

  utilisateurId: number | undefined; // L'ID de l'utilisateur connecté

  constructor(
    private semenceService: SemenceService,
    private loginPageService: LoginPageService
  ) {}

  ngOnInit() {
    // Récupérez l'ID de l'utilisateur connecté lors de l'initialisation du composant
    this.utilisateurId = this.loginPageService.getUtilisateurId();
  }

  ajouterSemence() {
    if (!this.utilisateurId) {
      console.error('Utilisateur non connecté');
      return;
    }

    // Utilisez l'ID de l'utilisateur connecté comme paysan_id
    this.nouvelleSemence.paysan_id = { id: this.utilisateurId };

    this.semenceService.ajouterSemence(this.nouvelleSemence).subscribe(
      (semenceAjoutee) => {
        console.log('Semence ajoutée avec succès :', semenceAjoutee);
        // Gérez ce qui doit arriver après l'ajout réussi
      },
      (erreur) => {
        console.error('Erreur lors de l\'ajout de la semence :', erreur);
        // Gérez l'erreur
      }
    );
  }
}
