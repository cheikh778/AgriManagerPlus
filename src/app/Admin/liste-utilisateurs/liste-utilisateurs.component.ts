import { Component } from '@angular/core';
import { ListeProjetAgricolService } from 'src/app/liste-projet-agricol.service';
import { ListeUtilisateurService } from 'src/app/liste-utilisateur.service';
import { User } from 'src/app/modeles';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.scss']
})
export class ListeUtilisateursComponent {

  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  user : User[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private userSevice : ListeUtilisateurService){}
  
  ngOnInit(): void {
    this.userSevice.getListeUser().subscribe(
    {next : (apps) => {
      this.user = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
  }
  )
}
}
