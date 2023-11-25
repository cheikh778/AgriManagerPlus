import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
// import { User } from '../types/user';
import { Authentification } from './modeles';
import { jwtDecode } from 'jwt-decode';
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
          this.router.navigate(['adminDashboard']);
          console.log("Bienvenue Admin");
        } else if (roles === 'paysan') {
           this.router.navigate(['paysanDashboard']);
          // this.router.navigate(['ajoutCulture']);
          console.log("Bienvenue Paysan");
        } else if (roles === 'employe') {
          this.router.navigate(['employeeDashboard']);
          console.log("Bienvenue Employe")
        } else {
          this.router.navigate(['clientDashboard']);
          console.log("Bienvenue Client")
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
  
  // private getId(paysan : number){
  //    this.http
  //   .post<any>(`${this.endpoint}`, user)
  //   .subscribe((res: any) => {
  //   paysan = res.id
  //     return paysan
  //   })
   
  // }
  // getId(): Observable<number> {
  //   return this.http.post<any>(`${this.endpoint}`, user).pipe(
  //     map(res => res.id),
  //     catchError(error => {
  //       console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur :', error);
  //       return throwError(error);
  //     })
  //   );
  // }

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


  
  // doLogout() {
  //   let removeToken = localStorage.removeItem('access_token');
  //   if (removeToken == null) {
  //     this.router.navigate(['log-in']);
  //   }
  // }
  // doLogout() {
  //   let removeToken = localStorage.removeItem('access_token');
  //   if (removeToken == null) {
  //     this.router.navigate(['log-in']);
  //   }
  // }
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


  getCurrentUser(): number | null {
    const token = localStorage.getItem('access_token');
    console.log(localStorage.getItem('access_token'))
  
    if (token) {
      // Décodez le jeton JWT pour obtenir les informations de l'utilisateur
      const decodedToken = this.decodeToken(token);
      if (decodedToken && decodedToken.id) {
        return decodedToken.id;
      }
      console.log('Decoded Token:', decodedToken);
      return decodedToken;
    }
  
    return null;
  }

  private decodeToken(token: string): any {
    try {
      
  const decodedToken = jwtDecode(token);
      
      
  return decodedToken;
    } catch (error) {
      console.error('Erreur lors du décodage du jeton JWT :', error);
      return null;
    }
  
  }
  // public deconnecter(){
  //   localStorage.removeItem('access_token');
  // }
}
