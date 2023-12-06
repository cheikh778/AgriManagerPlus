import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListeUtilisateurService } from 'src/app/liste-utilisateur.service';

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

    this.loadUtilisateur();
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

  onFileSelected(event: any): void {
    this.photoFile = event.target.files[0] as File;
  }
photos = {
  file : File,
  photo : '',
}
  onUploadPhoto(): void {
    if (this.photoFile) {
      this.utilisateurService.uploadPhotoUtilisateur(this.photos).subscribe(
        (photoUrl) => {
          console.log('Photo uploaded successfully:', photoUrl);
          this.utilisateurForm.patchValue({ photoUrl });
        },
        (error) => {
          console.error('Erreur lors du téléchargement de la photo de profil', error);
        }
      );
    }
  }

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
