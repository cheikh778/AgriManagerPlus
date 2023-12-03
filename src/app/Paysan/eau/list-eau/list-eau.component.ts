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
  message="";

  constructor(private eauService: EauService,private _router: Router){}

  ngOnInit(): void {
    this.eauService.getTachesParPaysan().subscribe(
    {next : (apps) => {
      this.eaux = apps;
    },
    error:(err) =>{
      //this.errorMessage="Erreur de requete"
      console.log("Erreur de requete");
    },
    complete:() =>{
      //this.sucessMessage="Requete valider"
      console.log("Requete valider");
    }
   } )
  }

  private getEmployees() {
    this.eauService.getEaux().subscribe({
      next: (apps) => {
        this.eaux = apps;
      },
      error: (err) => {
        //this.errorMessage = "Erreur de la requête";
        console.log("Erreur de la requête");
      },
      complete: () => {
        //this.sucessMessage = "Requête valide";
        console.log("Requête valide");
      }
    });
  }

  modifierEau(eauId: number) {

    console.log("id : ",eauId)
    this._router.navigate(['updateEau', eauId]);
  }

  deleteEau(eauId: number) {
    this.eauService.supprimerEau(eauId).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
        this.sucessMessage="Suppression réussie";
       // this.message=this.sucessMessage;
      },
      error: (e) => {
        console.log(e);
        this.errorMessage="Erreur lors de la suppression, Veuillez réessayer plus tard."
        //this.message=this.errorMessage;
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
