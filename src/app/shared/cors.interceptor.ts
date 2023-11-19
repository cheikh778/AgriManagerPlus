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
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200', 
      },
    });

    return next.handle(modifiedRequest);
  }
}
