import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {
  
  constructor(private http: HttpClient) { }
  inscription(data: any) {
    return this.http.post('http://localhost:8081/api/v1/auth/register', data);
  } 
}
