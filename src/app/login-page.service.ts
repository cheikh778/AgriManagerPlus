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
  semenceService: any;
  private utilisateurConnecte: any;

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: Authentification): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem("role");
  }


  // Sign-in
  signIn(user: Authentification) {
    return this.http
      .post<any>(`${this.endpoint}`, user)
      .subscribe((res: any) => {
        console.log('Roles reçus du serveur :', res.role)
        console.log('access_token', res.access_token);
        console.log('id', res.id);
        console.log('Type de id de l\'utilisateur connecté :', typeof  res.id);
        this.setToken(res.access_token);
        this.setRole(res.role)
        const roles = res.role; // Obtenez les rôles de la réponse
        if (roles === 'admin') {
          this.successMessage = "Bienvenue Mr l'administrateur,  vous allez être redirigé vers votre page!";
          setTimeout(() => {
            this.router.navigate(['adminDashboard']);

          }, 2000);
          console.log("Bienvenue Admin");
        }
         else if (roles === 'paysan') {
          this.successMessage = "Bienvenue Mr le paysan,  vous allez être redirigé vers votre page!";
          setTimeout(() => {
            this.router.navigate(['paysanDashboard']);

          }, 2000);
          console.log("Bienvenue Paysan");
        }
        else if (roles === 'employe') {

          this.successMessage = "Bienvenue l'employé,  vous allez être redirigé vers votre page!";

         setTimeout(() => {
          this.router.navigate(['employeeDashboard']);

         }, 2000);
          console.log("Bienvenue Employe")
        }
        else {
          this.successMessage = "Bienvenue le client, vous allez être redirigé vers votre page!";

            setTimeout(() => {
              this.router.navigate(['clientDashboard']);
            }, 2000);

          console.log("Bienvenue Client");

        }


        this.utilisateurConnecte = res.user;

         this.semenceService.setUtilisateurConnecte(this.utilisateurConnecte);



      },
       (error) => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = "Erreur lors de la connexion, Verifier les inormations que vous avez entrées";

      }
      );
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  setToken(token : string){
    localStorage.setItem('access_token', token);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }


  private logoutUrl = 'http://localhost:8081/api/v1/auth/logout';
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


  public roleMatch(allowedRole : string) {
    let isMatch = false;
    const userRole: string |null = this.getRole();

    if (userRole != null && userRole) {
      if (userRole === allowedRole) {
        isMatch = true;
        return isMatch;
      } else {
        return isMatch;
      }
    }
    return isMatch;
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


  changePassword(data: any): Observable<any> {
    return this.http.patch('http://localhost:8081/api/v1/users', data);
  }

}
