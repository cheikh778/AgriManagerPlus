import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjoutCultureService {

  constructor(private http: HttpClient) { }
 
  ajoutCulture(data: any) {
    return this.http.post('http://localhost:8081/api/cultures/ajout', data);
  }

}
