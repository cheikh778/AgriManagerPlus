import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/modeles';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.scss']
})
export class ListeEmployeComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  employe : User[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private employeeService: EmployeeService,private _router: Router){}
  
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
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
  }

  // modifierSemence(semenceId: number) {
  //   // Rediriger vers la page de mise à jour avec l'ID de la semence
  //   console.log("id : ",semenceId)
  //   this._router.navigate(['updateSemence', semenceId]);
  // }

  // deleteSemence(semenceId: number) {
  //   this.semenceService.supprimerSemence(semenceId).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this._router.navigate(['listeSemence']);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  // }
  // redirectToSemenceList() {
  //   this._router.navigate(['listeSemence']);
  // }

  // status = false;
  // addToggle()
  // {
  //   this.status = !this.status;
  // }
}
