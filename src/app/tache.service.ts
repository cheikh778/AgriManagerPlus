// tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from './modeles'; 

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private apiUrl = 'http://localhost:8081/api/tache'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  ajouterTache(tache: Tache): Observable<Tache> {
    const url = `${this.apiUrl}/ajout`;
    return this.http.post<Tache>(url, tache);
  }

  getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.apiUrl);
  }

  getTachesParEmploye(employeId: number): Observable<Tache[]> {

    const url = `${this.apiUrl}/user/${employeId}`;
    return this.http.get<Tache[]>(url);
  }
  
  getTachesParPaysan(): Observable<Tache[]> {
    const url = `${this.apiUrl}/liste`;
    return this.http.get<Tache[]>(url);
  }

  getTacheParId(id: number): Observable<Tache> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tache>(url);
  }

  supprimerTache(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateTache(id: number, nouvelleTache: Tache): Observable<Tache> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Tache>(url, nouvelleTache);
  }
}
