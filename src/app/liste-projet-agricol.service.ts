import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationProjet } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class ListeProjetAgricolService {

  constructor(private __httpClient:HttpClient) { }
  getListeProjet() : Observable<ValidationProjet[]>{
    return this.__httpClient.get<ValidationProjet[]>("http://localhost:8081/api/demandeProjet/listerProjetEnAttente");

  }

  getListeProjetValider() : Observable<ValidationProjet[]>{
    return this.__httpClient.get<ValidationProjet[]>("http://localhost:8081/api/demandeProjet/listerProjetValider");

  }

  // listeEnAttente(data: any): Observable<ValidationProjet[]>{
  //   return this.__httpClient.get<ValidationProjet[]>('http://localhost:8081/api/demandeProjet/listerProjetEnAttente', data);
  // } 
}
