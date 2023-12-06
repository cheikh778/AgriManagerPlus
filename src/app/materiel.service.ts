import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private apiUrl = 'http://localhost:8081/api/materiels'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  ajouterMaterial(materiel: Materiel): Observable<Materiel> {
    const url = `${this.apiUrl}/ajout`;
    return this.http.post<Materiel>(url, materiel);
  }

  getMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.apiUrl);
  }

  getMaterialParPaysan(): Observable<Materiel[]> {
    const url = `${this.apiUrl}/liste`;
    return this.http.get<Materiel[]>(url);
  }

  getMaterielParId(id: number): Observable<Materiel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Materiel>(url);
  }

  supprimerMateriel(materielId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${materielId}`;
    return this.http.delete<void>(url);
  }
  

  updateMateriel(id: number, nouvelleEau: Materiel): Observable<Materiel> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Materiel>(url, nouvelleEau);
  }
}
