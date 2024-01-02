import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = 'http://localhost:8081/api/publications';

  constructor(
    private http: HttpClient
  ) { }

  ajouterPublication(formData: any): Observable<any> {
    const url = `${this.apiUrl}/ajout`;
    return this.http.post<any>(url, formData);
  }
  ajouterImagePublication(formData: FormData, id: number  ): Observable<any> {
    const url = `${this.apiUrl}/ajout/${id}`;
    return this.http.post<any>(url, formData);
  }

  getPublicationParPaysan(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paysan`);
  }

  
  getPublicationPublierClient(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/publierClient`);
  }

  getPublicationPublier(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/publier`);
  }

  getPublicationNonPublier(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/non_publier`);
  }

  getPublicationParId(id: number): Observable<Publication> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Publication>(url);
  }
  getPublicationParIdDetails(id: number): Observable<Publication> {
    const url = `${this.apiUrl}/details/${id}`;
    return this.http.get<Publication>(url);
  }

  supprimerPublication(publicationId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${publicationId}`;
    return this.http.delete<void>(url);
  }
  

  updatepublication(id: number, publication: Publication): Observable<Publication> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Publication>(url, publication);
  }

  publierCulture(pubId: number): Observable<Publication> {
    const url = `${this.apiUrl}/publier_publication/${pubId}`;
    return this.http.put<Publication>(url, {});
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
