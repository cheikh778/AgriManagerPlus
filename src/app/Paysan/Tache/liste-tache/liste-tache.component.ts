import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.scss']
})
export class ListeTacheComponent {
  taches : Tache[] = [];

  errorMessage = "";
  successMessage= "";

  constructor(private tacheService: TacheService,private _router: Router){}

  ngOnInit(): void {
    this.tacheService.getTachesParPaysan().subscribe(
    {next : (apps) => {
      this.taches = apps;
    },
    error:(err) =>{

      console.log("Erreur de requete")
    },
    complete:() =>{

      console.log("Requete valider")
    }
   } )
  }


  private getEmployees() {
    this.tacheService.getTaches().subscribe({
      next: (apps) => {
        this.taches = apps;
      },
      error: (err) => {

        console.log("Erreur de la requête");
      },
      complete: () => {

        console.log("Requete valider")
      }
    });
  }
  modifierTache(tacheId: number) {
    
    console.log("id : ",tacheId)
    this._router.navigate(['updateTache', tacheId]);
  }

  deleteTache(tacheId: number) {
    this.tacheService.supprimerTache(tacheId).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage="Suppression réussie";
       this.getEmployees();
      },
      error: (e) => {
        console.log(e);
        this.errorMessage="Erreur lors de la suppression. Veuillez réessayer plus tard!"
      }
    });
  }
  redirectToTacheList() {
    this._router.navigate(['listeTache']);
  }

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
}
