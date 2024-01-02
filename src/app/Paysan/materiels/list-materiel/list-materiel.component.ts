import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/materiel.service';
import { Materiel } from 'src/app/modeles';


declare var $: any;
@Component({
  selector: 'app-list-materiel',
  templateUrl: './list-materiel.component.html',
  styleUrls: ['./list-materiel.component.scss']
})
export class ListMaterielComponent implements AfterViewInit{
  materiel : Materiel[] = [];

  errorMessage = "";
  sucessMessage= "";


  constructor(private materialService: MaterielService,private _router: Router){}

  ngAfterViewInit(): void {
    $(document).ready(() => {
      $('#materielTable').DataTable();
    });
  }

  ngOnInit(): void {
    this.materialService.getMaterialParPaysan().subscribe(
    {next : (apps) => {
      this.materiel = apps;
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
    this.materialService.getMateriels().subscribe({
      next: (apps) => {
        this.materiel = apps;
      },
      error: (err) => {
        console.log("Erreur de requete")
      },
      complete: () => {
        console.log("Requete valider")
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
        this.sucessMessage="Suppression réussie"
        setTimeout(() => {

          this.redirectToMaterielList();

        }, 2000);
       this.getEmployees();
      },
      error: (e) => {
        console.log(e);
        this.errorMessage="Une Erreur s\'est produite lors de la suppression. Veuillez réessayer plus tard!"
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

