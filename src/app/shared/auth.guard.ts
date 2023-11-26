import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginPageService } from '../login-page.service';
import { delay } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: LoginPageService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.getToken() !== null) {
        const role = next.data['role'];

        if (role) {
          const match = this.authService.roleMatch(role);

          if (match) {
            return true;
          } else {
            console.log('Role not found ' + role);
            this.router.navigate(['forbidden']);
            return false;
          }
        }
      }

      if (this.authService.isLoggedIn !== true) {



        of(true).pipe(delay(0)).subscribe(() => {
          this.router.navigate(['pageNotAuthorized']);


          of(true).pipe(delay(5000)).subscribe(() => {
            this.router.navigate(['login']);
          });
        });


        return false;
      }

      return true;
    }

}
