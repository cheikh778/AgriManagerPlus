// assignation-tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignationTache } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class AssignationTacheService {

  private apiUrl = 'http://localhost:8080/api/assignations-tache'; // Remplacez cela par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  assignerTache(assignationTache: AssignationTache): Observable<AssignationTache> {
    return this.http.post<AssignationTache>(this.apiUrl, assignationTache);
  }

  getAssignationsTache(): Observable<AssignationTache[]> {
    return this.http.get<AssignationTache[]>(this.apiUrl);
  }

  getAssignationsTacheParEmploye(employeId: number): Observable<AssignationTache[]> {
    // Remplacez cet ID fictif par l'ID de l'employé réel
    const url = `${this.apiUrl}/employe/${employeId}`;
    return this.http.get<AssignationTache[]>(url);
  }

  getAssignationTacheParId(id: number): Observable<AssignationTache> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AssignationTache>(url);
  }

  supprimerAssignationTache(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateAssignationTache(id: number, nouvelleAssignationTache: AssignationTache): Observable<AssignationTache> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<AssignationTache>(url, nouvelleAssignationTache);
  }
}
