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



blockUser(userId: number): void {
  this.userSevice.bloquer(userId).subscribe(
    {
      next: () => {
        this.sucessMessage = "Utilisateur bloqué avec succès";

      },
      error: (err) => {
        this.errorMessage = "Erreur lors du blocage de l'utilisateur";
      }
    }
  );
}


unblockUser(userId: number): void {
  this.userSevice.debloquer(userId).subscribe(
    {
      next: () => {
        this.sucessMessage = "Utilisateur débloqué avec succès";

      },
      error: (err) => {
        this.errorMessage = "Erreur lors du déblocage de l'utilisateur";
      }
    }
  );
}

private updateUserStatus(userId: number, newStatus: string): number {
  const userIndex = this.user.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    this.user[userIndex].status = newStatus;
  }
  return userIndex;
}
}
