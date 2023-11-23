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

<<<<<<< HEAD
  constructor(private userSevice : ListeUtilisateurService,private zone: NgZone,private cdr: ChangeDetectorRef){}
  
=======
  constructor(private userSevice : ListeUtilisateurService){}

>>>>>>> 15abc0724628b3e362a1380b2d6808e6e7e8839c
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

// private getUsers() {
//   this.userSevice.getListeUser().subscribe({
//     next: (apps) => {
//       this.user = apps;
//     },
//     error: (err) => {
//       this.errorMessage = "Erreur de la requête";
//     },
//     complete: () => {
//       this.sucessMessage = "Requête valide";
//     }
//   });
// }
blockUser(userId: number): void {
<<<<<<< HEAD
  this.userSevice.bloquer(userId).subscribe({
    next: () => {
      this.sucessMessage = "Utilisateur bloqué avec succès";
      this.updateUserStatus(userId, 'bloquer');
      this.cdr.detectChanges();
    },
    error: (err) => {
      this.errorMessage = "Erreur lors du blocage de l'utilisateur";
=======
  this.userSevice.bloquer(userId).subscribe(
    {
      next: () => {
        this.sucessMessage = "Utilisateur bloqué avec succès";

      },
      error: (err) => {
        this.errorMessage = "Erreur lors du blocage de l'utilisateur";
      }
>>>>>>> 15abc0724628b3e362a1380b2d6808e6e7e8839c
    }
  });
}

<<<<<<< HEAD
unblockUser(userId: number): void {
  this.userSevice.debloquer(userId).subscribe({
    next: () => {
      this.sucessMessage = "Utilisateur débloqué avec succès";
      this.updateUserStatus(userId, 'debloquer');
    },
    error: (err) => {
      this.errorMessage = "Erreur lors du déblocage de l'utilisateur";
=======

unblockUser(userId: number): void {
  this.userSevice.debloquer(userId).subscribe(
    {
      next: () => {
        this.sucessMessage = "Utilisateur débloqué avec succès";

      },
      error: (err) => {
        this.errorMessage = "Erreur lors du déblocage de l'utilisateur";
      }
>>>>>>> 15abc0724628b3e362a1380b2d6808e6e7e8839c
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
