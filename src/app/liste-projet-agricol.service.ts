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

  validerProjet(id: number) {
    const numericId = parseInt(id.toString(), 10);
    return this.__httpClient.post('http://localhost:8081/api/demandeProjet/validerStatus/'+numericId, {});
  } 

  // listeEnAttente(data: any): Observable<ValidationProjet[]>{
  //   return this.__httpClient.get<ValidationProjet[]>('http://localhost:8081/api/demandeProjet/listerProjetEnAttente', data);
  // } 

  envoieEmail(mail: string,data: any) {
    // const numericId = parseInt(id.toString(), 10);
    const headers = new HttpHeaders({ 'Content-Type': 'text/html' });
    return this.__httpClient.post('http://localhost:8081/api/mail/send/'+mail, data,{ headers });
  } 
}
