import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelleAgricole } from 'src/app/modeles';
import { ParcelleAgricoleService } from 'src/app/parcelle-agricole.service';

@Component({
  selector: 'app-list-parcelle-agricole',
  templateUrl: './list-parcelle-agricole.component.html',
  styleUrls: ['./list-parcelle-agricole.component.scss']
})
export class ListParcelleAgricoleComponent {

  parcelle : ParcelleAgricole[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private parcelleService: ParcelleAgricoleService,private _router: Router){}
  
  ngOnInit(): void {
    this.parcelleService.getParcelleAgricoleParPaysan().subscribe(
    {next : (apps) => {
      this.parcelle = apps;
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
    this.parcelleService.getParcelleAgricole().subscribe({
      next: (apps) => {
        this.parcelle = apps;
      },  
      error: (err) => {
        this.errorMessage = "Erreur de la requête";
      },
      complete: () => {
        this.sucessMessage = "Requête valide";
      }
    });
  }

  modifierParcelle(parcelle_id: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la semence
    console.log("id : ",parcelle_id)
    this._router.navigate(['updateParcelle', parcelle_id]);
  }

  deleteParcelle(parcelle_id: number) {
    this.parcelleService.supprimerParcelleAgricole(parcelle_id).subscribe({
      next: (data) => {
        console.log(data);
       this.getEmployees();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToParcelleList() {
    this._router.navigate(['listeParcelle']);
  }

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  
  detailsParcelle(id: number) {
    this._router.navigate(['parcelle-datails', id]);
  }

}
