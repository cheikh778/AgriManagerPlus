import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AssignationTacheService } from 'src/app/assignationtache.service';
import { AssignationTache } from 'src/app/modeles';

@Component({
  selector: 'app-ajout-image-tache',
  templateUrl: './ajout-image-tache.component.html',
  styleUrls: ['./ajout-image-tache.component.scss']
})
export class AjoutImageTacheComponent {
  status = false;
  assignation : AssignationTache[] = [];

  utilisateurForm!: FormGroup;
  photoFile: File | null = null;
  constructor(
    private fb: FormBuilder,
    private imageService: AssignationTacheService,
    private route: ActivatedRoute,
    private _router: Router,
  ) {}

  onFileSelected(event: any): void {
    this.photoFile = event.target.files[0] as File;
  }

  addToggle()
  {
    this.status = !this.status;
  }

  onUploadPhoto(): void {
    const assignationId = this.route.snapshot.params['id'];

    if(this.photoFile){
      const formData = new FormData();
      formData.append('file', this.photoFile);
      let obs : Observable<string> | void = this.imageService.uploadPhotoTache(formData,assignationId);
      if(obs){

      obs.subscribe(
        {
          next:(res:any)=>{
            console.log("Enregistrement Ok, reponse Serveur : ",res);
            this.imageService.setPhoto(res.image)
            console.log("res.image",res.image)

          },
          error:(err:any)=>{
            console.log("Erreur envoie fichier",err)
          },
          complete:()=>{
            console.log("Success Traitement")
            console.log(this.getPhotoProfil())
            this._router.navigate(['tacheValider']);
            
          }
        }
      )}
    }else{
      alert("Veuillez insérer une photo de la tache pour valider")
    }
  }

  getPhotoProfil():string | null{
    return this.imageService.getPhoto();
  }

  private getEmployees() {
    this.imageService.getAllAssignations().subscribe({
      next: (apps) => {
        this.assignation = apps;
      },
      error: (err) => {
        //this.errorMessage = "Erreur de la requête";
        console.log("Erreur de la requête");
      },
      complete: () => {
        //this.sucessMessage = "Requête valide";
        console.log("Requête valide");
      }
    });
  }
  
  validerTache(t: AssignationTache): void {
    
    t.dateFin = new Date();

    t.status = 'valider';


    this.imageService.validerTache(t.assignationId).subscribe(
      () => {
        console.log('Tâche validée avec succès');

        this.getEmployees();
      },
      (error) => {
        console.error('Erreur lors de la validation de la tâche', error);
      }
    );
  }

}
