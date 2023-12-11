// assignation-tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignationTache } from './modeles';


@Injectable({
  providedIn: 'root'
})
export class AssignationTacheService {

  private baseUrl = 'http://localhost:8081/api/assignations-tache'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) {}

  getAllAssignations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getAssignationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAssignationsByPaysan(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/liste`);
  }

  createAssignation(assigner: AssignationTache): Observable<AssignationTache> {
    const url = `${this.baseUrl}/ajout`;
    return this.http.post<AssignationTache>(url, assigner);
  }
  updateAssignation(id: number, assignation: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, assignation);
  }

  deleteAssignation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  validerTache(assignationId: number): Observable<AssignationTache> {
    const url = `${this.baseUrl}/api/assignations-tache/valider/${assignationId}`;
    return this.http.put<AssignationTache>(url, {});
  }
}
