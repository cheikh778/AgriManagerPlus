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
  sucessMessage= "";

  constructor(private semenceService: SemenceService,private _router: Router){}
  
  ngOnInit(): void {
    this.semenceService.getSemencesParPaysan().subscribe(
    {next : (apps) => {
      this.semence = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
   } )
  }

  modifierSemence(semenceId: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la semence
    console.log("id : ",semenceId)
    this._router.navigate(['updateSemence', semenceId]);
  }

  deleteSemence(semenceId: number) {
    this.semenceService.supprimerSemence(semenceId).subscribe({
      next: (data) => {
        console.log(data);
        this._router.navigate(['listeSemence']);
      },
      error: (e) => {
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
