// intrat-agricole.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntratAgricole } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class IntratAgricoleService {

  private apiUrl = 'http://localhost:8081/api/intrats-agricoles';

  constructor(private http: HttpClient) { }

  ajouterIntratAgricole(intratAgricole: IntratAgricole): Observable<IntratAgricole> {
    return this.http.post<IntratAgricole>(this.apiUrl, intratAgricole);
  }

  getIntratsAgricoles(): Observable<IntratAgricole[]> {
    return this.http.get<IntratAgricole[]>(this.apiUrl);
  }

  getIntratsAgricolesParAgriculteur(agriculteurId: number): Observable<IntratAgricole[]> {
    
    const url = `${this.apiUrl}/agriculteur/${agriculteurId}`;
    return this.http.get<IntratAgricole[]>(url);
  }

  getIntratAgricoleParId(id: number): Observable<IntratAgricole> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IntratAgricole>(url);
  }

  supprimerIntratAgricole(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateIntratAgricole(id: number, nouvelIntratAgricole: IntratAgricole): Observable<IntratAgricole> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<IntratAgricole>(url, nouvelIntratAgricole);
  }
}
