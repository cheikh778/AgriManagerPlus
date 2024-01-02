import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';
import { Publication } from 'src/app/modeles';
import { PublicationService } from 'src/app/publication.service';

@Component({
  selector: 'app-liste-publication',
  templateUrl: './liste-publication.component.html',
  styleUrls: ['./liste-publication.component.scss']
})
export class ListePublicationComponent {
  status = false;
  publication : Publication[] = [];
  pubNonPublier : Publication[] = [];
  pubPublier : Publication[] = [];

  
  errorMessage = "";
  successMessage= "";
  addToggle()
  {
    this.status = !this.status;
  }
  constructor(
    private builder: FormBuilder, private fb: FormBuilder,
    private publicService: PublicationService,
    private cultureService : CultureService,
    private router: Router
   ){}

  ngOnInit(): void {
    this.publicService.getPublicationParPaysan().subscribe(
    {next : (apps) => {
      this.publication = apps;
    },
    error:(err) =>{
      //this.errorMessage="Erreur de requete"
      console.log("Erreur de requete");
    },
    complete:() =>{
      //this.sucessMessage="Requete valider"
      console.log("Requete valider");
    }
   } )

   this.publicService.getPublicationNonPublier().subscribe(
    {next : (apps) => {
      this.pubNonPublier = apps;
    },
    error:(err) =>{
      //this.errorMessage="Erreur de requete"
      console.log("Erreur de requete");
    },
    complete:() =>{
      //this.sucessMessage="Requete valider"
      console.log("Requete valider");
    }
   } )

   this.publicService.getPublicationPublier().subscribe(
    {next : (apps) => {
      this.pubPublier = apps;
      console.log("Publication Publié : ", this.pubPublier )
    },
    error:(err) =>{
      //this.errorMessage="Erreur de requete"
      console.log("Erreur de requete");
    },
    complete:() =>{
      //this.sucessMessage="Requete valider"
      console.log("Requete valider");
    }
   } )
  }

  modifierPub(pubId: number) {

    console.log("id : ",pubId)
    this.router.navigate(['updatePublication', pubId]);
  }

  deletePublication(publicationId: number) {
    this.publicService.supprimerPublication(publicationId).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage = "Suppression réussie";
        this.router.navigate(['listePublication'])
      },
      error: (e) => {
        this.errorMessage = "Erreur lors de la suppression";
        console.log(e);
      }
    });
  }

  publier(t: Publication): void {
    
    // t.datePublication = new Date();

    // t.status = 'publier';


    this.publicService.publierCulture(t.idPublication).subscribe(
      () => {
        console.log('Publication publié avec succès');

        // this.getEmployees();
      },
      (error) => {
        console.error('Erreur lors de la validation de la tâche', error);
      }
    );
  }

}
