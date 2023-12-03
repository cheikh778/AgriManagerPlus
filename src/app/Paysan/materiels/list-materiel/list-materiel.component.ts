import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/materiel.service';
import { Materiel } from 'src/app/modeles';

@Component({
  selector: 'app-list-materiel',
  templateUrl: './list-materiel.component.html',
  styleUrls: ['./list-materiel.component.scss']
})
export class ListMaterielComponent {
  materiel : Materiel[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private materialService: MaterielService,private _router: Router){}
  
  ngOnInit(): void {
    this.materialService.getMaterialParPaysan().subscribe(
    {next : (apps) => {
      this.materiel = apps;
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
    this.materialService.getMateriels().subscribe({
      next: (apps) => {
        this.materiel = apps;
      },  
      error: (err) => {
        this.errorMessage = "Erreur de la requête";
      },
      complete: () => {
        this.sucessMessage = "Requête valide";
      }
    });
  }

  modifierMateriel(materiel_id: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la semence
    console.log("id : ",materiel_id)
    this._router.navigate(['updateMateriel', materiel_id]);
  }

  deleteMateriel(materiel_id: number) {
    this.materialService.supprimerMateriel(materiel_id).subscribe({
      next: (data) => {
        console.log(data);
       this.getEmployees();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToMaterielList() {
    this._router.navigate(['listeMateriel']);
  }

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  
  detailsMateriel(id: number) {
    this._router.navigate(['materiel-datails', id]);
  }
}
