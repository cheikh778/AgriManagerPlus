import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';
import { Culture, Publication, User } from 'src/app/modeles';
import { PublicationService } from 'src/app/publication.service';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.scss']
})
export class UpdatePublicationComponent {
  status = false;

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
photoFile: File | null = null;

successMessage: string | undefined;
errorMessage: string | undefined;
  constructor(
    private builder: FormBuilder, private fb: FormBuilder,
    private publicService: PublicationService,
    private cultureService : CultureService,
    private route: ActivatedRoute, private router: Router
   ){}

   addToggle()
   {
     this.status = !this.status;
   }
  private getPublication() {
    this.id = this.route.snapshot.params['id'];
    this.publicService.getPublicationParId(this.id).subscribe({
      next: (data) => {
        this.publication =  data;
        console.log("semence : ",this.publication )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onFileSelected(event: any): void {
    this.photoFile = event.target.files[0] as File;
  }

  ngOnInit(): void {
    this.cultureService.getCulturesByPaysan().subscribe(
      {next : (apps) => {
        this.cultures = apps;
      },  
      error:(err) =>{
        this.errorMessage="Erreur de requete"
      },
      complete:() =>{
        this.successMessage="Requete valider"
      }
     } )
    this.getPublication();
  }

  updatePublication() {
    this.publicService.updatepublication(this.id, this.publication).subscribe({
      next: (data) => {
        console.log(data);

        this.successMessage = 'Modification réussie. ';

          setTimeout(() => {
            this.redirectToSemenceList();
          }, 2000);

      },
      error: (e) => {
        console.log(e);

        this.errorMessage = 'une erreur s\'est produite lors de la modification. Veuillez réessayer plus tard';

          setTimeout(() => {
            this.redirectToSemenceList();
          }, 2000);
      }
    });
  }

  redirectToSemenceList() {
    this.router.navigate(['listePublication']);
  }

  onSubmit() {
    console.log(this.publication);
    this.updatePublication();
  }
}
