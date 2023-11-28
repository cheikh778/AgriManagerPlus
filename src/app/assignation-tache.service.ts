import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignationTache } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class AssignationTacheService {

  
  // private apiUrl = 'http://localhost:8081/api/assignationsTache';

  // constructor(private http: HttpClient) { }

  // // Mettez à jour l'utilisateur connecté
  // // setUtilisateurConnecte(utilisateur: User) {
  // //   this.utilisateurConnecte = utilisateur;
  // // }

  // ajouterSemence(assigne: AssignationTache): Observable<Semence> {
  //   const url = `${this.apiUrl}/ajout`;
  //   return this.http.post<Semence>(url, semence);
  // }

  // getSemences(): Observable<Semence[]> {
  //   return this.http.get<Semence[]>(this.apiUrl);
  // }

  // getSemencesParPaysan(): Observable<Semence[]> {
  //   const url = `${this.apiUrl}/liste`;
  //   return this.http.get<Semence[]>(url);
  // }

  // getSemenceParId(id: number): Observable<Semence> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Semence>(url);
  // }

  // supprimerSemence(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/delete/${id}`;
  //   return this.http.delete<void>(url);
  // }

  // updateSemence(id: number, nouvelleSemence: Semence): Observable<Semence> {
  //   const url = `${this.apiUrl}/update/${id}`;
  //   return this.http.put<Semence>(url, nouvelleSemence);
  // }
}
