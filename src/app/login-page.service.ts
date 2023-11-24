import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

import { Authentification, User } from './modeles';
@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  endpoint: string = 'http://localhost:8081/api/v1/auth/authenticate';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  semenceService: any;
  private utilisateurConnecte: any;
  constructor(private http: HttpClient, public router: Router) {}

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
        console.log('access_token', res.access_token);
        localStorage.setItem('access_token', res.access_token);

        const roles = res.role; // Obtenez les rôles de la réponse
        if (roles === 'admin') {
          this.router.navigate(['adminDashboard']);
          console.log("Bienvenue Admin");
        } else if (roles === 'paysan') {
          this.router.navigate(['paysanDashboard']);
          console.log("Bienvenue Paysan");
        } else if (roles === 'employe') {
          this.router.navigate(['employeeDashboard']);
          console.log("Bienvenue Employe")
        } else {
          this.router.navigate(['clientDashboard']);
          console.log("Bienvenue Client")
        }

        this.utilisateurConnecte = res.user;

         this.semenceService.setUtilisateurConnecte(this.utilisateurConnecte);



      },
       (error) => {
        console.error('Erreur lors de la connexion :', error);

      }
      );
  }
  getUtilisateurId(): number {
    return this.utilisateurConnecte ? this.utilisateurConnecte.id : null;
  }


  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }


  private logoutUrl = 'http://localhost:8081/api/auth/logout';
  doLogout() {
    this.http.post(this.logoutUrl, {}).pipe(
catchError((error) => {
        console.error('La déconnexion a échoué', error);
        return throwError(error);
      })
    ).subscribe(
      () => this.handleLogoutSuccess(),


() => this.handleLogoutSuccess()
    );
  }

  private handleLogoutSuccess() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }



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
  }


