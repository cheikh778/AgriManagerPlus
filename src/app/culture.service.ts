// culture.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Culture } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  private apiUrl = 'http://localhost:8081/api/cultures'; 

  constructor(private http: HttpClient) { }

  ajouterCulture(culture: Culture): Observable<Culture> {
    return this.http.post<Culture>(this.apiUrl, culture);
  }

  getCultures(): Observable<Culture[]> {
    return this.http.get<Culture[]>(this.apiUrl);
  }

  getCulturesParAgriculteur(agriculteurId: number): Observable<Culture[]> {

    const url = `${this.apiUrl}/agriculteur/${agriculteurId}`;
    return this.http.get<Culture[]>(url);
  }

  getCultureParId(id: number): Observable<Culture> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Culture>(url);
  }

  supprimerCulture(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateCulture(id: number, nouvelleCulture: Culture): Observable<Culture> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Culture>(url, nouvelleCulture);
  }
}
