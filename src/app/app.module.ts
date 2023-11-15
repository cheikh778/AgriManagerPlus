import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { BlogComponent } from './blog/blog.component';
import { TermesComponent } from './termes/termes.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { PublicationsComponent } from './publications/publications.component';
import { Page404Component } from './page404/page404.component';
import { Page403Component } from './page403/page403.component';
import { AjoutCultureComponent } from './Paysan/ajout-culture/ajout-culture.component';
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
   BlogComponent,
    TermesComponent,
    ConditionsComponent,
    PublicationsComponent,
    Page404Component,
    BlogComponent,
    TermesComponent,
    ConditionsComponent,
    PublicationsComponent,
    Page404Component,
    Page403Component,
    AjoutCultureComponent,
    DashboardPComponent,
    DashboardEComponent,
    DashboardAComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
