import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EauService } from 'src/app/eau.service';
import { Eau } from 'src/app/modeles';

@Component({
  selector: 'app-list-eau',
  templateUrl: './list-eau.component.html',
  styleUrls: ['./list-eau.component.scss']
})
export class ListEauComponent {

  eaux : Eau[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private eauService: EauService,private _router: Router){}
  
  ngOnInit(): void {
    this.eauService.getTachesParPaysan().subscribe(
    {next : (apps) => {
      this.eaux = apps;
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
    this.eauService.getEaux().subscribe({
      next: (apps) => {
        this.eaux = apps;
      },  
      error: (err) => {
        this.errorMessage = "Erreur de la requête";
      },
      complete: () => {
        this.sucessMessage = "Requête valide";
      }
    });
  }

  modifierEau(eauId: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la semence
    console.log("id : ",eauId)
    this._router.navigate(['updateEau', eauId]);
  }

  deleteEau(eauId: number) {
    this.eauService.supprimerEau(eauId).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToEauList() {
    this._router.navigate(['listeEau']);
  }

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  detailsEau(id: number) {
    this._router.navigate(['eau-datails', id]);
  }

}
