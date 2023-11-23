// parcelle-agricole.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParcelleAgricole } from './modeles'; // Assurez-vous d'importer le modèle approprié s'il existe

@Injectable({
  providedIn: 'root'
})
export class ParcelleAgricoleService {

  private apiUrl = 'http://localhost:8081/api/parcelles-agricoles'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  ajouterParcelleAgricole(parcelleAgricole: ParcelleAgricole): Observable<ParcelleAgricole> {
    return this.http.post<ParcelleAgricole>(this.apiUrl, parcelleAgricole);
  }

  getParcellesAgricoles(): Observable<ParcelleAgricole[]> {
    return this.http.get<ParcelleAgricole[]>(this.apiUrl);
  }

  getParcellesAgricolesParAgriculteur(agriculteurId: number): Observable<ParcelleAgricole[]> {
    
    const url = `${this.apiUrl}/user/${agriculteurId}`;
    return this.http.get<ParcelleAgricole[]>(url);
  }

  getParcelleAgricoleParId(id: number): Observable<ParcelleAgricole> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ParcelleAgricole>(url);
  }

  supprimerParcelleAgricole(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateParcelleAgricole(id: number, nouvelleParcelleAgricole: ParcelleAgricole): Observable<ParcelleAgricole> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ParcelleAgricole>(url, nouvelleParcelleAgricole);
  }
}
