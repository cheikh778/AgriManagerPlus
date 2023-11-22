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
  
  envoie = {
    objet : 'Validation du Projet',
    message : 'Votre Projet a été validé avec sucess. Veuillez vous inscrire ici',
  
  }
  valider(id: number,mail: string) {
    this.validerSevice.validerProjet(id).subscribe(
      response => {
        // Gérer la réponse de la requête
      
        console.log('Projet validé avec succès', response);
          // this.validerSevice.envoieEmail(mail,this.envoie).subscribe(
          //   response => {
          //     console.log('Envoie mail reussi', response);
          //   },
          //   error => {
          //     // Gérer les erreurs éventuelles
          //     console.error('Erreur lors de lenvoie de mail', error);
          //   }
          // )
      },
      error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la validation du projet', error);
      }
    );
    this.validerSevice.envoieEmail(mail,this.envoie).subscribe(
        response => {
          console.log('Envoie mail reussi', response);
        },
        error => {
          // Gérer les erreurs éventuelles
          console.error('Erreur lors de lenvoie de mail', error);
        }
      )
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


  this.validerSevice.getListeProjetValider().subscribe(
    {next : (apps) => {
      this.projetValider = apps;
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



//  sendMail(mail: string): void {
//   this.validerSevice.envoieEmail(mail,this.envoie).subscribe(
//     {
//       next: () => {
//         this.sucessMessage = "Utilisateur bloqué avec succès";
//         // const userIndex = this.user.findIndex(user => user.id === userId);
//         // if (userIndex !== -1) {
//         //   this.user[userIndex].status = 'bloquer';
//         // }
//       },
//       error: (err) => {
//         this.errorMessage = "Erreur lors du blocage de l'utilisateur";
//       }
//     }
//   );
// }
}
