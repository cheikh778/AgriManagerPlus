import { Component } from '@angular/core';
import { SemenceService } from 'src/app/semence.service';
import { Router } from '@angular/router';
import { Semence } from 'src/app/modeles';


@Component({
  selector: 'app-liste-semence',
  templateUrl: './liste-semence.component.html',
  styleUrls: ['./liste-semence.component.scss']
})
export class ListeSemenceComponent {
  semence : Semence[] = [];

  errorMessage = "";
  successMessage= "";

  constructor(private semenceService: SemenceService,private _router: Router){}
  
  ngOnInit(): void {
    this.semenceService.getSemencesParPaysan().subscribe(
    {next : (apps) => {
      this.semence = apps;
    },
    error:(err) =>{
      console.log("Erreur de requete");
      
    },
    complete:() =>{
      console.log("Requete valider")
      
    }
   } )
  }

  private getEmployees() {
    this.semenceService.getSemences().subscribe({
      next: (apps) => {
        this.semence = apps;
      },  
      error: (err) => {
        console.log("Erreur de requete");
       
      },
      complete: () => {
        console.log("Requete valider")
        
      }
    });
  }

  modifierSemence(semenceId: number) {
    
    console.log("id : ",semenceId)
    this._router.navigate(['updateSemence', semenceId]);
  }

  deleteSemence(semenceId: number) {
    this.semenceService.supprimerSemence(semenceId).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage = "Suppression réussie";
       this.getEmployees();
      },
      error: (e) => {
        this.errorMessage = "Erreur lors de la suppression";
        console.log(e);
      }
    });
  }
  redirectToSemenceList() {
    this._router.navigate(['listeSemence']);
  }

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
}
