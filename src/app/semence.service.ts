
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Semence } from './modeles';
import { User } from './modeles';  // Assurez-vous d'importer le modèle User

@Injectable({
  providedIn: 'root'
})
export class SemenceService {

  private apiUrl = 'http://localhost:8081/api/semences';
  private utilisateurConnecte!: User;

  constructor(private http: HttpClient) { }

  // Mettez à jour l'utilisateur connecté
  setUtilisateurConnecte(utilisateur: User) {
    this.utilisateurConnecte = utilisateur;
  }

  ajouterSemence(semence: Semence): Observable<Semence> {
    if (!this.utilisateurConnecte) {

      console.error('Utilisateur non connecté');
    }

    // Utilisez l'id de l'utilisateur connecté comme paysan_id
    semence.paysan_id = this.utilisateurConnecte;

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
