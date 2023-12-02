import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ListeProjetAgricolService } from 'src/app/liste-projet-agricol.service';
import { ListeUtilisateurService } from 'src/app/liste-utilisateur.service';
import { User } from 'src/app/modeles';
import { NgZone } from '@angular/core';import { ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.scss']
})
export class ListeUtilisateursComponent implements OnInit, AfterViewInit{

  status = false;

  
  addToggle()
  {
    this.status = !this.status;
  }
  user : User[] = [];

  errorMessage = "";
  sucessMessage= "";

  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userSevice : ListeUtilisateurService,private zone: NgZone,private cdr: ChangeDetectorRef){}
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    // this.getEmployees();
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

private getEmployees() {
  this.userSevice.getListeUser().subscribe({
    next: (apps) => {
      this.user = apps;
    },  
    error: (err) => {
      this.errorMessage = "Erreur de la requête";
    },
    complete: () => {
      this.sucessMessage = "Requête valide";
    }
  });
}


blockUser(userId: number): void {
  this.userSevice.bloquer(userId).subscribe({
    next: (data) => {
      this.sucessMessage = "Utilisateur bloqué avec succès";
      this.updateUserStatus(userId, 'bloquer');
      console.log(data);
      this.getEmployees();

      // Attendre 2 secondes avant de recharger la page
      setTimeout(() => {
        location.reload();
      }, 0);
    },
    error: (err) => {
      this.errorMessage = "Erreur lors du blocage de l'utilisateur";
    }
  });
}


unblockUser(userId: number): void {
  this.userSevice.debloquer(userId).subscribe({
    next: (data) => {
      this.sucessMessage = "Utilisateur débloqué avec succès";
      this.updateUserStatus(userId, 'debloquer');
       console.log(data);
       this.getEmployees();
      setTimeout(() => {
        location.reload();
      }, 0);
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
