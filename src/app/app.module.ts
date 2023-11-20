<<<<<<< HEAD
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
=======

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';
import { AjoutCultureComponent } from './Paysan/Culture/ajout-culture/ajout-culture.component';
import { ListeCultureComponent } from './Paysan/Culture/liste-culture/liste-culture.component';
import { UpdateCultureComponent } from './Paysan/Culture/update-culture/update-culture.component';
import { CreateEmployeComponent } from './Paysan/Employe/create-employe/create-employe.component';
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { ListeEmployeComponent } from './Paysan/Employe/liste-employe/liste-employe.component';
import { UpdateEmployeComponent } from './Paysan/Employe/update-employe/update-employe.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { PublicationsComponent } from './publications/publications.component';
import { TermesComponent } from './termes/termes.component';
import { ListeTacheComponent } from './Paysan/Tache/liste-tache/liste-tache.component';
import { CreateTacheComponent } from './Paysan/Tache/create-tache/create-tache.component';
import { UpdateTacheComponent } from './Paysan/Tache/update-tache/update-tache.component';


>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
<<<<<<< HEAD
   BlogComponent,
=======
    BlogComponent,
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772
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
<<<<<<< HEAD
    ListeProjetEnAttenteComponent,
    ListeUtilisateursComponent,
    HeaderDashbaordComponent,
    AjoutUtilisateurComponent,
    AjoutEmployeComponent,
    ListeEmployeComponent,
    AjoutTacheComponent,
    ListeTacheComponent,
    AjoutSemenceComponent,
=======
    CreateEmployeComponent,
    UpdateEmployeComponent,
    ListeEmployeComponent,
    UpdateCultureComponent,
    ListeCultureComponent,
    ListeTacheComponent,
    CreateTacheComponent,
    UpdateTacheComponent,
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
<<<<<<< HEAD
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true,
    },
  ],
=======
  providers: [],
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772
  bootstrap: [AppComponent]
})
export class AppModule { }
