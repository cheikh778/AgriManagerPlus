import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPageService } from "../login-page.service";

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
    constructor(private authService: LoginPageService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    const targetUrls = [
      // 'http://localhost:8081/api/demandeProjet/*',
      // 'http://localhost:8081/api/v1/users/*',
      // 'http://localhost:8081/api/demandeProjet/listerProjetEnAttente'
      'http://localhost:8081/api/demandeProjet/ajout',
      'http://localhost:8081/api/v1/users/change-password/',
      'http://localhost:8081/api/v1/users/reset-password'
      // Ajoutez d'autres URLs si nécessaire
    ]; 
    const shouldAddToken = !targetUrls.some(url => request.url.startsWith(url));

    const modifiedRequest = shouldAddToken
      ? request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + authToken,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
          },
        })
      : request;

    // const modifiedRequest = request.clone({
    //   setHeaders: {
    //     Authorization: "Bearer " + authToken,
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:4200', 
    //   },
    // });

    return next.handle(modifiedRequest);
  }
}
