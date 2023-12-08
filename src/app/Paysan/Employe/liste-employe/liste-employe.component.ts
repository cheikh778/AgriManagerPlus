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
    this.employeeService.getEmployeeByPaysan().subscribe(
    {next : (apps) => {
      this.employe = apps;
    },
    error:(err) =>{
      console.log("Erreur de requete")
      
    },
    complete:() =>{
      
      console.log("Requete valider")
    }
   } )
  }

  modifierUser(userId: number) {

    console.log("id : ",userId)
    this._router.navigate(['updateEmployee', userId]);
  }

  deleteEmployee(employeId: number) {
    this.employeeService.supprimerUser(employeId).subscribe({
      next: (data) => {
        console.log(data);
        this.sucessMessage = "Suppression réussie";
        
      },
      error: (e) => {
        this.errorMessage = "Erreur lors de la suppression";
        console.log(e);
      }
    });
  }


}
