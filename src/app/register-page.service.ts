import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {
  private apiUrl = 'http://localhost:8081/api/semences';

  constructor(private http: HttpClient) { }
  inscription(data: any) {
    return this.http.post('http://localhost:8081/api/v1/auth/register', data);
  } 


 
}
