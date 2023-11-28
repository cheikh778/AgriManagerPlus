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
  sucessMessage= "";

  constructor(private tacheService: TacheService,private _router: Router){}
  
  ngOnInit(): void {
    this.tacheService.getTachesParPaysan().subscribe(
    {next : (apps) => {
      this.taches = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
   } )
  }


  private getEmployees() {
    this.tacheService.getTaches().subscribe({
      next: (apps) => {
        this.taches = apps;
      },  
      error: (err) => {
        this.errorMessage = "Erreur de la requête";
      },
      complete: () => {
        this.sucessMessage = "Requête valide";
      }
    });
  }
  modifierTache(tacheId: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la semence
    console.log("id : ",tacheId)
    this._router.navigate(['updateTache', tacheId]);
  }

  deleteTache(tacheId: number) {
    this.tacheService.supprimerTache(tacheId).subscribe({
      next: (data) => {
        console.log(data);
       this.getEmployees();
      },
      error: (e) => {
        console.log(e);
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
