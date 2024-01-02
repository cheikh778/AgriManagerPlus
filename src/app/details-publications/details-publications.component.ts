import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';
import { Culture, Publication, User } from 'src/app/modeles';
import { PublicationService } from 'src/app/publication.service';

@Component({
  selector: 'app-details-publications',
  templateUrl: './details-publications.component.html',
  styleUrls: ['./details-publications.component.scss']
})
export class DetailsPublicationsComponent {


  id!: number;
  cultures: Culture[] = [];
  user : User[] = [];
  publication : Publication = {
    idPublication:0,
      titrePUB: '',
      idCulture: this.cultures[0],
      paysan : this.user[0],
      description: '',
      photo: '',
      datePublication:new Date(),
      status: 'non_publier',
  }
  constructor(
    private builder: FormBuilder, private fb: FormBuilder,
    private publicService: PublicationService,
    private cultureService : CultureService,
    private route: ActivatedRoute, private router: Router
   ){}

   
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.publicService.getPublicationParIdDetails(this.id).subscribe({
      next: (data) => {
        this.publication =  data;
        console.log("semence : ",this.publication )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

 


}
