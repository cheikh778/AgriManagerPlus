import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CultureService } from 'src/app/culture.service';
import { Culture } from 'src/app/modeles';
import { PublicationService } from 'src/app/publication.service';


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.scss']
})
export class CreatePublicationComponent implements OnInit {
  status = false;
  cultures : Culture[] = [];


  publication =  this.builder.group({
    titrePUB: this.builder.control('', Validators.required),
    idCulture: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    datePublication:new Date(),
    status: this.builder.control('non_publier'),
});

photoFile: File | null = null;
errorMessage = "";  
sucessMessage= "";

 constructor(
  private builder: FormBuilder, private fb: FormBuilder,
  private publicService: PublicationService,
  private cultureService : CultureService,
  private router: Router,
 ){}

  addToggle()
  {
    this.status = !this.status;
  }
    ngOnInit() {
      this.cultureService.getCulturesByPaysan().subscribe(
        {next : (apps) => {
          this.cultures = apps;
        },
        error:(err) =>{
          this.errorMessage="Erreur de requete"
        },
        complete:() =>{
          this.sucessMessage="Requete valider"
        }
       } )
      
    }

    onFileSelected(event: any): void {
      this.photoFile = event.target.files[0] as File;
    }
    ajoutPUB(): void {
      if(this.photoFile){
        const formData = new FormData();
        formData.append('file', this.photoFile);
        // Object.entries(this.publication.value).forEach(([key, value]) => {
        //   formData.append(key, value ?? ''); // Utilisation de l'opérateur de coalescence nulle
        // });
         this.publicService.ajouterPublication(this.publication.value).subscribe(res => 
          {
            
            // next:(res:any)=>{
              console.log("Enregistrement Ok, reponse Serveur : ",res);
              this.publicService.ajouterImagePublication(formData,res.idPublication).subscribe(
                {
                  next:(res:any)=>{
                    console.log("Enregistrement Image Ok, reponse Serveur : ",res);
                    this.router.navigate(['listePublication']);

                  }
                  
                }
              )
              // this.utilisateurService.setPhoto(res.photoProfil)
            // },
            
            // complete:()=>{
            //   console.log("Success Traitement")
            // }
          },
          error=>{
            console.log("Erreur envoie fichier",error)
          }
        )
      
        }else{
        alert("Charger une image d'abord")
      }
    }
  

  selectedImage!: File;
  imageUrl: string | undefined;

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.previewImage();
    }
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedImage);
  }



  }




