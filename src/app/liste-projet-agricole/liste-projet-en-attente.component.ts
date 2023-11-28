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


  valider(id: number,mail: string, nom:String) {
    const envoie = {
      objet : 'Validation du Projet',
      message :  `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenue dans AgriManager+</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          #container {
              width: 100%;
              margin: auto;
              overflow: hidden;
              border: 1px solid #ccc;
          }
          header {
              background: #fff;
              border-bottom: 1px solid #ccc;
              text-align: center;
          }
          header img {
              max-width: 100%;
              margin: 20px 0;
              border-radius: 50%;
              object-fit: cover;
          }
          main {
              padding: 20px 10px;
          }
          h1 {
              color: #000;
              padding: 10px;
              border-radius: 5px;
          }
          p {
              color: #333;
          }
          .visit-button {
              display: block;
              margin: 15px auto;
              padding: 10px 20px;
              background-color: #28a745;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              border: 1px solid #fff;
              cursor: pointer;
              text-align: center;
          }
          footer {
              padding: 10px 0;
              background: #28a745;
              color: #fff;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div id="container">
          <header>
              <img src="./assets/images/A1-removebg-preview.png" alt="Logo AgriManager+">
          </header>
          <main>
              <h1>Bienvenue dans AgriManager+ !</h1>
              <p>Cher(e) ${nom} ,</p>
              <p>Nous sommes ravis de vous accueillir dans la communauté AgriManager+ ! Merci de faire partie de notre plateforme dédiée à la gestion agricole avancée.</p>
              <a href="http://localhost:4200/accueil" class="visit-button">Visitez notre site</a>
          </main>
          <footer>
              <p>&copy; 2023 AgriManager+. Tous droits réservés.</p>
              <a href="http://localhost:4200/register">S'inscrire</a>
          </footer>
      </div>
  </body>
  </html>


    `,

    }
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

    this.validerSevice.envoieEmail(mail,envoie).subscribe(
        response => {
          console.log('Envoie mail reussi', response);
        },
        error => {
          // Gérer les erreurs éventuelles
          console.error('Erreur lors de lenvoie de mail', error);
        }
      )
  }
  // valider(id: number, mail: string) {
  //   this.validerSevice.validerProjet(id)
  //     .pipe(
  //       switchMap(() => this.validerSevice.envoieEmail(mail, this.envoie))
  //     )
  //     .subscribe(
  //       response => {
  //         console.log('Projet validé avec succès', response);
  //         console.log('Envoie mail réussi', response);
  //       },
  //       error => {
  //         console.error('Erreur lors de la validation du projet ou de l\'envoi de mail', error);
  //       }
  //     );
  // }

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
