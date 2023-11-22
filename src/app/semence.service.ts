// semence.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semence } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class SemenceService {

  private apiUrl = 'http://localhost:8080/api/semences';

  constructor(private http: HttpClient) { }

  ajouterSemence(semence: Semence): Observable<Semence> {
    return this.http.post<Semence>(this.apiUrl, semence);
  }

  getSemences(): Observable<Semence[]> {
    return this.http.get<Semence[]>(this.apiUrl);
  }

  getSemencesParAgriculteur(agriculteurId: number): Observable<Semence[]> {
    
    const url = `${this.apiUrl}/agriculteur/${agriculteurId}`;
    return this.http.get<Semence[]>(url);
  }

  getSemenceParId(id: number): Observable<Semence> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Semence>(url);
  }

  supprimerSemence(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateSemence(id: number, nouvelleSemence: Semence): Observable<Semence> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Semence>(url, nouvelleSemence);
  }
}
