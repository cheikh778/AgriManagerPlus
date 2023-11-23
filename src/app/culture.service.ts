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

  constructor(private httpClient: HttpClient) {}

  createCulture(culture: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, culture);
  }

  getCultureById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  updateCulture(id: number, updatedCulture: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, updatedCulture);
  }

  deleteCulture(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  getAllCultures(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  getCulturesByPaysan(paysanId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/paysan/${paysanId}`);
  }
}
