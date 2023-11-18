import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { LoginPageService } from "./login-page.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: LoginPageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            }
        });
        return next.handle(req);
    }
}