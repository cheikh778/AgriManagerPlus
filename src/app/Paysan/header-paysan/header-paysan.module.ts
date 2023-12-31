// header-paysan.module.ts
import { NgModule } from '@angular/core';
import { HeaderPaysanComponent } from './header-paysan.component';
import { CommonModule } from '@angular/common';
import { LoginPageService } from 'src/app/login-page.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderPaysanComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderPaysanComponent,

  ],
})
export class HeaderPaysanModule {

  constructor(private authService: LoginPageService) {} // Injection du service AuthService

  logout() {
    this.authService.doLogout(); // Appel de la méthode doLogout() du service AuthService
  }

  status = false;

  addToggle()
  {
    this.status = !this.status;
  }
 }
