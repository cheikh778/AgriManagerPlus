import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { HeaderDashbaordComponent } from './Admin/header-dashbaord/header-dashbaord.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';
import { AjoutCultureComponent } from './Paysan/Culture/ajout-culture/ajout-culture.component';
import { ListeCultureComponent } from './Paysan/Culture/liste-culture/liste-culture.component';
import { UpdateCultureComponent } from './Paysan/Culture/update-culture/update-culture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FooterComponent } from './footer/footer.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { PublicationsComponent } from './publications/publications.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TermesComponent } from './termes/termes.component';

import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { CorsInterceptor } from './shared/cors.interceptor';

import { HeaderCultureComponent } from './Culture/header-culture/header-culture.component';
import { HeaderPaysanModule } from './Paysan/header-paysan/header-paysan.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Semence
import { BrowserModule } from '@angular/platform-browser';
import { AjoutSemenceComponent } from './Paysan/Semence/ajout-semence/ajout-semence.component';
import { ListeSemenceComponent } from './Paysan/Semence/liste-semence/liste-semence.component';
import { UpdateSemenceComponent } from './Paysan/Semence/update-semence/update-semence.component';
import { AjoutTacheComponent } from './Paysan/Tache/ajout-tache/ajout-tache.component';
import { ListeTacheComponent } from './Paysan/Tache/liste-tache/liste-tache.component';
import { UpdateTacheComponent } from './Paysan/Tache/update-tache/update-tache.component';
import { AjoutEmployeComponent } from './Paysan/Employe/ajout-employe/ajout-employe.component';
import { ListeEmployeComponent } from './Paysan/Employe/liste-employe/liste-employe.component';
import { UpdateEmployeComponent } from './Paysan/Employe/update-employe/update-employe.component';
import { StoreModule } from '@ngrx/store';
import { AssignerTacheComponent } from './Paysan/AssignerTache/assigner-tache/assigner-tache.component';





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
    DashboardPComponent,
    DashboardEComponent,
    DashboardAComponent,
    ListeProjetEnAttenteComponent,
    ListeUtilisateursComponent,
    HeaderDashbaordComponent,
    AjoutUtilisateurComponent,
    AjoutSemenceComponent,
    // HeaderPaysanComponent,
    AjoutCultureComponent,
    HeaderCultureComponent,
    ListeCultureComponent,
    UpdateCultureComponent,
    ListeSemenceComponent,
    UpdateSemenceComponent,
    AjoutTacheComponent,
    ListeTacheComponent,
    UpdateTacheComponent,
    AjoutEmployeComponent,
    ListeEmployeComponent,
    UpdateEmployeComponent,
    AssignerTacheComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderPaysanModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    HeaderPaysanModule,
    // ... autres composants à exporter si nécessaire
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
