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
