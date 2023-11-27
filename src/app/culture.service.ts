

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Culture } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  private apiUrl = 'http://localhost:8081/api/cultures';

  constructor(private httpClient: HttpClient) {}


   getCultures(): Observable<Culture[]> {
    return this.httpClient.get<Culture[]>(this.apiUrl);
  }

  getCulturesByPaysan(): Observable<Culture[]> {
    const url = `${this.apiUrl}/liste`;
    return this.httpClient.get<Culture[]>(url);
  }

  createCulture(culture: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, culture);
  }

  getCultureById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }
  

  // updateCulture(id: number, updatedCulture: any): Observable<any> {
  //   return this.httpClient.put(`${this.apiUrl}/${id}`, updatedCulture);
  // }

  deleteCulture(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  supprimerCulture(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete<void>(url);
  }

  updateCulture(id: number, nouvelleCulture: any): Observable<Culture> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.httpClient.put<Culture>(url, nouvelleCulture);
  }
}


