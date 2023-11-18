
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
    CreateEmployeComponent,
    UpdateEmployeComponent,
    ListeEmployeComponent,
    UpdateCultureComponent,
    ListeCultureComponent,
    ListeTacheComponent,
    CreateTacheComponent,
    UpdateTacheComponent,



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
