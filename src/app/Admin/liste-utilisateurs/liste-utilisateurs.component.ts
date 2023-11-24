import { Component } from '@angular/core';
import { ListeProjetAgricolService } from 'src/app/liste-projet-agricol.service';
import { ListeUtilisateurService } from 'src/app/liste-utilisateur.service';
import { User } from 'src/app/modeles';
import { NgZone } from '@angular/core';import { ChangeDetectorRef } from '@angular/core';


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

  constructor(private userSevice : ListeUtilisateurService,private zone: NgZone,private cdr: ChangeDetectorRef){}

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
  this.userSevice.bloquer(userId).subscribe({
    next: () => {
      this.sucessMessage = "Utilisateur bloqué avec succès";
      this.updateUserStatus(userId, 'bloquer');
      this.cdr.detectChanges();
    },
    error: (err) => {
      this.errorMessage = "Erreur lors du blocage de l'utilisateur";
    }
  });
}

unblockUser(userId: number): void {
  this.userSevice.debloquer(userId).subscribe({
    next: () => {
      this.sucessMessage = "Utilisateur débloqué avec succès";
      this.updateUserStatus(userId, 'debloquer');
    },
    error: (err) => {
      this.errorMessage = "Erreur lors du déblocage de l'utilisateur";
    }
  });
}


private updateUserStatus(userId: number, newStatus: string): number {
  const userIndex = this.user.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    this.user[userIndex].status = newStatus;
  }
  return userIndex;
}
}
