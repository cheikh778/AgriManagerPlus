import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';
import { Publication } from 'src/app/modeles';
import { PublicationService } from 'src/app/publication.service';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {

    status = false;
    publication : Publication[] = [];
  
    
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
      this.publicService.getPublicationPublierClient().subscribe(
      {next : (apps) => {
        this.publication = apps;
        console.log("publication",this.publication)
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
  
    detailsPub(pubId: number) {

      console.log("id : ",pubId)
      this.router.navigate(['details', pubId]);
    }
  
  

}
