import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutCultureService } from 'src/app/ajout-culture.service';
import { LoginPageService } from 'src/app/login-page.service';
import { Culture, User } from 'src/app/modeles';
import { ChangeDetectorRef } from '@angular/core';

// import { HeaderPaysanComponent } from './Paysan/header-paysan/header-paysan.component';


@Component({
  selector: 'ajout-culture',
  templateUrl: './ajout-culture.component.html',
  styleUrls: ['./ajout-culture.component.scss']
})
export class AjoutCultureComponent {
  // userId: number | null = null;

  culture = {
    nom:'',
    dateDebut: new Date(),
    dateFin: new Date(),
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private cultureService: AjoutCultureService, private _router: Router,
    private authService : LoginPageService,private cdr: ChangeDetectorRef) {}

    
  submitForm() {
    console.log('Formulaire soumis', this.culture);

  try {
 
    // const userId = this.authService.getId();
    // this.cdr.detectChanges();

      this.cultureService.ajoutCulture(this.culture).subscribe(
        response => {
          console.log('Ajout réussi', response);
          this.successMessage = 'Ajout réussie. ';
        },
      error => {
        console.error('Erreur lors de l\'ajout', error);
        this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
      }
    );
  
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur connecté:', error);
  }
  }

  status = false;
  showNotificationDropdown = false;
  showProfileDropdown = false;

  addToggle() {
    this.status = !this.status;
  }

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
  logout() {
    this.authService.doLogout(); // Appel de la méthode doLogout() du service AuthService
  }
 
  
}
