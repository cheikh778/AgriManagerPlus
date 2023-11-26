import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BlogComponent } from './blog/blog.component';
import { TermesComponent } from './termes/termes.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { PublicationsComponent } from './publications/publications.component';
import { Page404Component } from './page404/page404.component';
import { Page403Component } from './page403/page403.component';
import { AjoutCultureComponent } from './Paysan/Culture/ajout-culture/ajout-culture.component';
import { UpdateCultureComponent } from './Paysan/Culture/update-culture/update-culture.component';
import { ListeCultureComponent } from './Paysan/Culture/liste-culture/liste-culture.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component';
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { HeaderDashbaordComponent } from './Admin/header-dashbaord/header-dashbaord.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';
import { AjoutEmployeComponent } from './Paysan/ajout-employe/ajout-employe.component';
import { AjoutTacheComponent } from './Paysan/ajout-tache/ajout-tache.component';
import { AjoutSemenceComponent } from './Paysan/ajout-semence/ajout-semence.component';
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';


import { CorsInterceptor } from './shared/cors.interceptor';

import { HeaderPaysanModule } from './Paysan/header-paysan/header-paysan.module';
import { HeaderCultureComponent } from './Culture/header-culture/header-culture.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Page401Component } from './page401/page401.component';





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
    AjoutEmployeComponent,
    AjoutTacheComponent,
    AjoutSemenceComponent,
    //HeaderPaysanComponent,
    AjoutCultureComponent,
    HeaderCultureComponent,
    ListeCultureComponent,
    UpdateCultureComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderPaysanModule,
    CommonModule,
    ReactiveFormsModule
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
