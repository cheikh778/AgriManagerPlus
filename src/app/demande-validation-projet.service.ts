import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeValidationProjetService {

  constructor(private http: HttpClient) { }
  demande(data: any) {
    return this.http.post('http://localhost:8081/api/demandeProjet/ajout', data);
  } 

}
