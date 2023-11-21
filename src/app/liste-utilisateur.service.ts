import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeUtilisateurService {

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
}
