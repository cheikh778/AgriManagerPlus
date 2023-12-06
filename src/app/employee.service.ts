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

  getEmployeeByPaysan(): Observable<User[]> {
    const url = `${this.apiUrl}/listeEmployee`;
    return this.http.get<User[]>(url);
  }
  inscrireEmployee(data: any) {
    return this.http.post('http://localhost:8081/api/v1/users/ajoutEmployee', data);
  }

  getUserParId(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(id: number, nouvelleEau: User): Observable<User> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<User>(url, nouvelleEau);
  }

  supprimerUser(employeeId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${employeeId}`;
    return this.http.delete<void>(url);
  }
}
