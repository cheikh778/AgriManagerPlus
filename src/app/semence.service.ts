import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semence } from './modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemenceService {

  private baseUrl = "http://localhost:8080/api/semence";

  constructor(private __httpClient: HttpClient) { }

  getSemence(id:  number):Observable<any>{
    return this.__httpClient.get(this.baseUrl + "/" + id);
  }

  getSemenceList(): Observable<Semence[]> {
    return this.__httpClient.get<Semence[]>(`${this.baseUrl}`);
  }

  createSemence(semence: Semence): Observable<Object> {
    return this.__httpClient.post(`${this.baseUrl}`, semence);
  }

  getSemenceById(id: number): Observable<Semence> {
    return this.__httpClient.get<Semence>(`${this.baseUrl}/${id}`);
  }

  updateSemence(id: number, semence: Semence): Observable<Object> {
    return this.__httpClient.put(`${this.baseUrl}/${id}`, semence);
  }

  deleteSemence(id: number): Observable<Object> {
    return this.__httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
