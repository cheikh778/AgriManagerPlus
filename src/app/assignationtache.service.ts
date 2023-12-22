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
  getTacheEnAttente(): Observable<AssignationTache[]> {
    return this.http.get<AssignationTache[]>(`${this.baseUrl}/tacheEnAttente`);
  }

  getTacheValider(): Observable<AssignationTache[]> {
    return this.http.get<AssignationTache[]>(`${this.baseUrl}/tacheValider`);
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
    const url = `${this.baseUrl}/valider/${assignationId}`;
    return this.http.put<AssignationTache>(url, {});
  }

  uploadPhotoTache(formData: FormData,id:number): Observable<string> {
    // Utilisez 'file' comme clé, correspondant au champ 'name' de l'input de type 'file'

    // Retournez directement l'observable sans appeler subscribe ici
    return this.http.post<string>('http://localhost:8081/api/imageTahe/'+ id, formData);
}
photo: string | null = null; // Autoriser la nullabilité ici

  // ...

  setPhoto(photo: string): void {
    this.photo = photo;
    console.log("photo",this.photo)
    // localStorage.setItem('image', photo); // Commentez ou retirez cette ligne si vous ne voulez pas stocker dans le localStorage
  }

  getPhoto(): string | null {
    
 
// Vous pouvez aussi retourner directement la valeur de la variable photo sans utiliser le localStorage
    return this.photo;
  }
}
