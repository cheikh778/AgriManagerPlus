// parcelle-agricole.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParcelleAgricole } from './modeles'; // Assurez-vous d'importer le modèle approprié s'il existe

@Injectable({
  providedIn: 'root'
})
export class ParcelleAgricoleService {

  private apiUrl = 'http://localhost:8081/api/parcelles'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  ajouterParcelleAgricole(parcelle: ParcelleAgricole): Observable<ParcelleAgricole> {
    const url = `${this.apiUrl}/ajout`;
    return this.http.post<ParcelleAgricole>(url, parcelle);
  }

  getParcelleAgricole(): Observable<ParcelleAgricole[]> {
    return this.http.get<ParcelleAgricole[]>(this.apiUrl);
  }

  getParcelleAgricoleParPaysan(): Observable<ParcelleAgricole[]> {
    const url = `${this.apiUrl}/liste`;
    return this.http.get<ParcelleAgricole[]>(url);
  }

  getParcelleAgricoleParId(id: number): Observable<ParcelleAgricole> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ParcelleAgricole>(url);
  }

  supprimerParcelleAgricole(eauId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${eauId}`;
    return this.http.delete<void>(url);
  }
  

  updateParcelleAgricole(id: number, nouvelleEau: ParcelleAgricole): Observable<ParcelleAgricole> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<ParcelleAgricole>(url, nouvelleEau);
  }
}
