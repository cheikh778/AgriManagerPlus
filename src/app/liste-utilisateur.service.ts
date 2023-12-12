import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeUtilisateurService {
  private apiUrl ='http://localhost:8081/api/v1/users';
 

  constructor(private __httpClient:HttpClient) { }

  getListeUser() : Observable<User[]>{
    return this.__httpClient.get<User[]>("http://localhost:8081/api/v1/users/listeUser");

  }

  bloquer(userId: number): Observable<any> {
    return this.__httpClient.put(`http://localhost:8081/api/v1/users/bloquer/${userId}`, {});
  }

  // Add a method to unblock a user by user ID
  debloquer(userId: number): Observable<any> {
    return this.__httpClient.put(`http://localhost:8081/api/v1/users/debloquer/${userId}`, {});
  }

  getUtilisateur(): Observable<any> {
    // Envoyez la demande GET pour récupérer les détails de l'utilisateur
    return this.__httpClient.get<User>(`${this.apiUrl}/profil`);
  }

  updateUtilisateur(utilisateur: User): Observable<any> {
    // Envoyez la demande PUT pour mettre à jour les détails de l'utilisateur
    return this.__httpClient.put(`http://localhost:8081/api/v1/users/updateProfil`, utilisateur);
  }

  // uploadPhotoUtilisateur(photo: any): Observable<any> {
  //   // const formData = new FormData();
  //   // formData.append('photo', photo);

  //   // Envoyez la demande POST pour télécharger la photo de profil
  //   return this.__httpClient.post(`http://localhost:8081/api/v1/users/upload`, photo);
  // }

  // uploadPhotoUtilisateur(photo: any): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('file', photo.file); // Utilisez 'file' comme clé, correspondant au champ 'name' de l'input de type 'file'
  //   formData.append('photo', photo.photo);
  
  //   return this.__httpClient.post('http://localhost:8081/api/v1/users/image', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   }).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  uploadPhotoUtilisateur(photo: File): Observable<string> | void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      alert(base64);
      return this.__httpClient.put<string>('http://localhost:8081/api/v1/users/image', {'imageB64': base64},{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    };
    reader.readAsDataURL(photo);
    
}
  uploadPhotoUtilisateur1(formData: FormData): Observable<string> {
    // Utilisez 'file' comme clé, correspondant au champ 'name' de l'input de type 'file'

    // Retournez directement l'observable sans appeler subscribe ici
    return this.__httpClient.post<string>('http://localhost:8081/api/image', formData);
}
setPhoto(photo: string): void {
  localStorage.setItem('photoProfil', photo);
}

getPhoto(): string | null {
  return localStorage.getItem("photoProfil");
}

}
