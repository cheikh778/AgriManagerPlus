import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.scss']
})
export class AjoutEmployeComponent {

  user = {
    nom: '',
    prenom: '',
    contact: '',
    email: '',
    password: '',
    role: 'employe',
    status:'debloquer',
    photo: 'indefini',
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private employeeService: EmployeeService, private _router: Router) {}

  submitForm() {
    console.log('Formulaire soumis', this.user);
    this.employeeService.inscrireEmployee(this.user).subscribe(
      response => {
        console.log("douguoul")
        console.log('Ajout réussi', response);
        console.log("douguouna")

        this.successMessage = 'Inscription réussie. Vous pouvez maintenant vous connecter.';

        setTimeout(() => {
          this._router.navigate(['/listeEmployee']);
        }, 2000);
      },
      error => {
        if(error.status === 409){
          console.error('Erreur lors de l\'ajout', error);
          this.errorMessage = 'Cette email existe déja';
        }else{
          console.error('Erreur lors de l\'ajout', error);
          this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout. Veuillez réessayer plus tard';
          console.log(this.user);
        }
     
      }
    );
  }
  status = false;
  showNotificationDropdown = false;
  showProfileDropdown = false;
  addToggle() {
    this.status = !this.status;
  }

  toggleNotificationDropdown() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
   
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showNotificationDropdown = false;
  }
}
