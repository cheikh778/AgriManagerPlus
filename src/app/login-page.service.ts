import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
// import { User } from '../types/user';
import { Authentification } from './modeles';
@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  endpoint: string = 'http://localhost:8081/api/v1/auth/authenticate';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: Authentification): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(user: Authentification) {
    return this.http
      .post<any>(`${this.endpoint}`, user)
      .subscribe((res: any) => {
        console.log('Roles reçus du serveur :', res.role)
        console.log('access_token', res.token);
        localStorage.setItem('access_token', res.token);
        const roles = res.role; // Obtenez les rôles de la réponse
        if (roles === 'admin') {
          this.router.navigate(['adminDashboard']);
        } else if (roles === 'paysan') {
          this.router.navigate(['paysanDashboard']);
        } else if (roles === 'employe') {
          this.router.navigate(['employeeDashboard']);
        } else {
          this.router.navigate(['clientDashboard']);
        }
        // this.getUserProfile(res._id).subscribe((res) => {
        //   this.currentUser = res;
        //   this.router.navigate(['user-profile/' + res.msg._id]);
        // });
        //}
      },
       (error) => {
        console.error('Erreur lors de la connexion :', error); // Affiche l'erreur dans la console
        // Vous pouvez également gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
      }
      );
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }  
  public deconnecter(){
    localStorage.removeItem('access_token');
  }
}
