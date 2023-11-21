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
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { HeaderDashbaordComponent } from './Admin/header-dashbaord/header-dashbaord.component';
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { AjoutEmployeComponent } from './Paysan/ajout-employe/ajout-employe.component';
import { ListeEmployeComponent } from './Paysan/liste-employe/liste-employe.component';
import { AjoutTacheComponent } from './Paysan/ajout-tache/ajout-tache.component';
import { ListeTacheComponent } from './Paysan/liste-tache/liste-tache.component';
import { AjoutSemenceComponent } from './Paysan/ajout-semence/ajout-semence.component';

import { CorsInterceptor } from './shared/cors.interceptor';



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
    ConditionsComponent,
    PublicationsComponent,
    Page404Component,
    Page403Component,
    AjoutCultureComponent,
    DashboardPComponent,
    DashboardEComponent,
    DashboardAComponent,
    ListeProjetEnAttenteComponent,
    ListeUtilisateursComponent,
    HeaderDashbaordComponent,
    AjoutUtilisateurComponent,
    AjoutEmployeComponent,
    ListeEmployeComponent,
    AjoutTacheComponent,
    ListeTacheComponent,
    AjoutSemenceComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
