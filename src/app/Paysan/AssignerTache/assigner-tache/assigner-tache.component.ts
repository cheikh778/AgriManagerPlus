import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignationTacheService } from 'src/app/assignationtache.service';
import { EmployeeService } from 'src/app/employee.service';
import { LoginPageService } from 'src/app/login-page.service';

import { AssignationTache, Employee, Tache, User } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';

@Component({
  selector: 'app-assigner-tache',
  templateUrl: './assigner-tache.component.html',
  styleUrls: ['./assigner-tache.component.scss']
})
export class AssignerTacheComponent implements OnInit {
  
  employe : User[] = [];
  tache : Tache[] = [];
  assigner : AssignationTache = {
    assignationId: 0,
    dateDebut: new Date(),
    dateFin: new Date(),
    employee: this.employe[0], // Add this line
    tache: this.tache[0], // Add this line
    nomEmploye:'gbh',
    nomTache:'' ,
    status: 'en_attente',
    
  };
  errorMessage = "";  
  sucessMessage= "";
  taches: Tache[] = []; 
 

  constructor(
    
    private assignationService: AssignationTacheService,
    private employeService:EmployeeService,
    private tacheService:TacheService,
    private _router: Router
    
  ) {}

  ngOnInit(): void {
    this.employeService.getEmployeeByPaysan().subscribe(
    {next : (apps) => {
      this.employe = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
   } )
  
    this.tacheService.getTachesParPaysan().subscribe((taches: Tache[]) => this.taches = taches);

    // this.assignationForm = this.formBuilder.group({
    //   employee: [null, Validators.required],
    //   tache: [null, Validators.required],
    //   dateDebut: [new Date(), Validators.required],
    //   dateFin: [new Date(), Validators.required],
    //   status: ['En Attente', Validators.required] 
    // });
  }

  submitForm() {
    console.log('Formulaire soumis', this.assigner);
    this.assignationService.createAssignation(this.assigner)
    .subscribe(
      (response) => {
        // this.assigner.dateDebut=new Date();
        this._router.navigate(['listAssignation']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout', error);
        if (error.error) {
          console.error('Contenu de l\'erreur :', JSON.stringify(error.error, null, 2));
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
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showNotificationDropdown = false;
  }
}