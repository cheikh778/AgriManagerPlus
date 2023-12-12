import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListeUtilisateurService } from 'src/app/liste-utilisateur.service';
import { User } from 'src/app/modeles';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})
export class ProfilAdminComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  messageSuccess:'' | undefined;

  userId = 1; 
  selectedFile: File | null = null;

  utilisateurForm!: FormGroup;
  photoFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: ListeUtilisateurService
  ) {}

  ngOnInit(): void {
    this.utilisateurForm = this.fb.group({
      prenom: [''],
      nom: [''],
      email: [''],
      numeroTelephone: [''],
      dateNaissance: [''],
      photoUrl: ['']
    });

    // this.loadUtilisateur();
    this.getUserById();

  }

  loadUtilisateur(): void {
    this.utilisateurService.getUtilisateur().subscribe(
      (utilisateur) => {
        this.utilisateurForm.patchValue(utilisateur);
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur', error);
      }
    );
  }

  user : User = {
    id : 0,
    nom : '',
    prenom : '',
    contact : '',
    email : '',
    password : '',
    role : '',
    status : '',
    photo: '',
  };

  private getUserById() {
    this.utilisateurService.getUtilisateur().subscribe({
      next: (data) => {
        this.user = data;
        console.log("user : ",this.user )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  successMessage: string | undefined;
  errorMessage: string | undefined;
  updateUser() {
    this.utilisateurService.updateUtilisateur( this.user).subscribe({
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
    // this.router.navigate(['listeEmployee']);
  }

  onSubmit() {
    console.log(this.user);
    this.updateUser();
  }



  onFileSelected(event: any): void {
    this.photoFile = event.target.files[0] as File;
  }

  onUploadPhoto(): void {
    
    if(this.photoFile){
      const formData = new FormData();
      formData.append('file', this.photoFile);
      let obs : Observable<string> | void = this.utilisateurService.uploadPhotoUtilisateur1(formData);
      if(obs){
        
      obs.subscribe(
        {
          next:(res:any)=>{
            console.log("Enregistrement Ok, reponse Serveur : ",res);
            this.utilisateurService.setPhoto(res.photoProfil)
          },
          error:(err:any)=>{
            console.log("Erreur envoie fichier",err)
          },
          complete:()=>{
            console.log("Success Traitement")
          }
        }
      )}
    }else{
      alert("Charger une image d'abord")
    }
  }

  getPhotoProfil():string | null{
    return this.utilisateurService.getPhoto()
  }
// photos = {
//   file : File,
//   photo : '',
// }
//   onUploadPhoto(): void {
//     if (this.photoFile) {
//       this.utilisateurService.uploadPhotoUtilisateur(this.photos.file).subscribe(
//         (photoUrl) => {
//           console.log('Photo uploaded successfully:', photoUrl);
//           this.utilisateurForm.patchValue({ photoUrl });
//         },
//         (error) => {
//           console.error('Erreur lors du téléchargement de la photo de profil', error);
//         }
//       );
//     }
//   }

  // onUploadPhoto(): void {
  //   const formData = new FormData();
  //   formData.append('file', this.photos.file);
  
  //   this.utilisateurService.uploadPhotoUtilisateur(formData).subscribe(
  //     (photoUrl) => {
  //       console.log('Photo uploaded successfully:', photoUrl);
  //       this.utilisateurForm.patchValue({ photoUrl });
  //     },
  //     (error) => {
  //       console.error('Erreur lors du téléchargement de la photo de profil', error);
  //     }
  //   );
  // }  

  onSaveChanges(): void {
    const updatedUtilisateur = { ...this.utilisateurForm.value };
    this.utilisateurService.updateUtilisateur(updatedUtilisateur).subscribe(
      (utilisateur) => {
        console.log('Détails de l\'utilisateur mis à jour avec succès:', utilisateur);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour des détails de l\'utilisateur', error);
      }
    );
  }
}
