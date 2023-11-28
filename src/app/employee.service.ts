import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8081/api/v1/users';
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<User[]> {
    const url = `${this.apiUrl}/listeEmployee`;
    return this.http.get<User[]>(url);
  }
}
