import { Component } from '@angular/core';
import { ListeProjetAgricolService } from '../liste-projet-agricol.service';
import { ValidationProjet } from '../modeles';

@Component({
  selector: 'app-liste-projet-en-attente',
  templateUrl: './liste-projet-en-attente.component.html',
  styleUrls: ['./liste-projet-en-attente.component.scss']
})
export class ListeProjetEnAttenteComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }

  validerProjet : ValidationProjet[] = [];
  projetValider : ValidationProjet[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private validerSevice : ListeProjetAgricolService){}
  

  valider(id: number) {
    this.validerSevice.validerProjet(id).subscribe(
      response => {
        // Gérer la réponse de la requête
        console.log('Projet validé avec succès', response);
      },
      error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la validation du projet', error);
      }
    );
  }

  ngOnInit(): void {
    this.validerSevice.getListeProjet().subscribe(
    {next : (apps) => {
      this.validerProjet = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
  }
  )


  // this.validerSevice.getListeProjetValider().subscribe(
  //   {next : (apps) => {
  //     this.projetValider = apps;
  //   },
  //   error:(err) =>{
  //     this.errorMessage="Erreur de requete"
  //   },
  //   complete:() =>{
  //     this.sucessMessage="Requete valider"
  //   }
  // }
  // )
 }
}
