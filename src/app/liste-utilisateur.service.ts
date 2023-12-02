import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeUtilisateurService {
  private apiUrl ='';
 

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
    return this.__httpClient.get<User>(`${this.apiUrl}/utilisateur`);
  }

  updateUtilisateur(utilisateur: User): Observable<any> {
    // Envoyez la demande PUT pour mettre à jour les détails de l'utilisateur
    return this.__httpClient.put(`http://localhost:8081/api/v1/users/utilisateur`, utilisateur);
  }

  uploadPhotoUtilisateur(photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);

    // Envoyez la demande POST pour télécharger la photo de profil
    return this.__httpClient.put(`http://localhost:8081/api/v1/users/utilisateur/photo`, formData);
  }
}
