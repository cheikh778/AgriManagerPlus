import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl='http://localhost:8081/api/v1/users';

  constructor(private http: HttpClient) { }

  getCleRestoration (email: any): Observable<any> {

    const url = `${this.apiUrl}/change-password/${email}`;
    return this.http.get<any>(url);
  }

  changePassword(data: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/v1/users/reset-password', data);
  }
}
