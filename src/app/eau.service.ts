import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eau } from './modeles'; 

@Injectable({
  providedIn: 'root'
})
export class EauService {

  private apiUrl = 'http://localhost:8081/api/eaux';

  constructor(private http: HttpClient) { }

  ajouterEau(eau: Eau): Observable<Eau> {
    const url = `${this.apiUrl}/ajout`;
    return this.http.post<Eau>(url, eau);
  }

  getEaux(): Observable<Eau[]> {
    return this.http.get<Eau[]>(this.apiUrl);
  }

  getTachesParPaysan(): Observable<Eau[]> {
    const url = `${this.apiUrl}/liste`;
    return this.http.get<Eau[]>(url);
  }

  getEauParId(id: number): Observable<Eau> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Eau>(url);
  }

  supprimerEau(eauId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${eauId}`;
    return this.http.delete<void>(url);
  }
  

  updateEau(id: number, nouvelleEau: Eau): Observable<Eau> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Eau>(url, nouvelleEau);
  }
}
