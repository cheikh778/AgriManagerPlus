import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AjoutCultureComponent } from './Paysan/Culture/ajout-culture/ajout-culture.component';
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { HeaderDashbaordComponent } from './Admin/header-dashbaord/header-dashbaord.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { PasswordAdminComponent } from './Admin/password-admin/password-admin.component';
import { ProfilAdminComponent } from './Admin/profil-admin/profil-admin.component';
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';
import { ListeCultureComponent } from './Paysan/Culture/liste-culture/liste-culture.component';
import { UpdateCultureComponent } from './Paysan/Culture/update-culture/update-culture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
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
import { ProfilComponent } from './Paysan/profil/profil.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Semence
import { BrowserModule } from '@angular/platform-browser';
import { AssignerTacheComponent } from './Paysan/AssignerTache/assigner-tache/assigner-tache.component';
import { AjoutEmployeComponent } from './Paysan/Employe/ajout-employe/ajout-employe.component';
import { ListeEmployeComponent } from './Paysan/Employe/liste-employe/liste-employe.component';
import { UpdateEmployeComponent } from './Paysan/Employe/update-employe/update-employe.component';
import { AjoutSemenceComponent } from './Paysan/Semence/ajout-semence/ajout-semence.component';
import { ListeSemenceComponent } from './Paysan/Semence/liste-semence/liste-semence.component';
import { UpdateSemenceComponent } from './Paysan/Semence/update-semence/update-semence.component';
import { AjoutTacheComponent } from './Paysan/Tache/ajout-tache/ajout-tache.component';
import { ListeTacheComponent } from './Paysan/Tache/liste-tache/liste-tache.component';
import { UpdateTacheComponent } from './Paysan/Tache/update-tache/update-tache.component';
//Eau
import { BarChartComponent } from './Employee/bar-chart/bar-chart.component';
import { HeaderEmployeComponent } from './Employee/header-employe/header-employe.component';
import { LineChartComponent } from './Employee/line-chart/line-chart.component';
import { PasswordEmployeComponent } from './Employee/password-employe/password-employe.component';
import { ProfilEmployeComponent } from './Employee/profil-employe/profil-employe.component';
import { BarChart1Component } from './Paysan/bar-chart1/bar-chart1.component';
import { AjoutEauComponent } from './Paysan/eau/ajout-eau/ajout-eau.component';
import { DetailsEauComponent } from './Paysan/eau/details-eau/details-eau.component';
import { ListEauComponent } from './Paysan/eau/list-eau/list-eau.component';
import { UpdateEauComponent } from './Paysan/eau/update-eau/update-eau.component';
import { AjoutMaterielComponent } from './Paysan/materiels/ajout-materiel/ajout-materiel.component';
import { DetailsMaterielComponent } from './Paysan/materiels/details-materiel/details-materiel.component';
import { ListMaterielComponent } from './Paysan/materiels/list-materiel/list-materiel.component';
import { UpdateMaterielComponent } from './Paysan/materiels/update-materiel/update-materiel.component';
import { AjoutParcelleAgricoleComponent } from './Paysan/parcellagricole/ajout-parcelle-agricole/ajout-parcelle-agricole.component';
import { DetailsParcelleAgricoleComponent } from './Paysan/parcellagricole/details-parcelle-agricole/details-parcelle-agricole.component';
import { ListParcelleAgricoleComponent } from './Paysan/parcellagricole/list-parcelle-agricole/list-parcelle-agricole.component';
import { UpdateParcelleAgricoleComponent } from './Paysan/parcellagricole/update-parcelle-agricole/update-parcelle-agricole.component';

import { BarChart2Component } from './Admin/bar-chart2/bar-chart2.component';
import { PasswordPaysanComponent } from './Paysan/password-paysan/password-paysan.component';
import { PasswordOublierComponent } from './password-oublier/password-oublier.component';
import { AssignationtacheListComponent } from './Paysan/AssignerTache/assignationtache-list/assignationtache-list.component';
import { UpdateAssignationTacheComponent } from './Paysan/AssignerTache/update-assignation-tache/update-assignation-tache.component';
import { ListeTacheEnAttenteComponent } from './Employee/liste-tache-en-attente/liste-tache-en-attente.component';
import { ListeTacheValiderComponent } from './Employee/liste-tache-valider/liste-tache-valider.component';
import { ValiderTachesComponent } from './Employee/valider-taches/valider-taches.component';
import { AjoutImageTacheComponent } from './Employee/ajout-image-tache/ajout-image-tache.component';
import { CreatePublicationComponent } from './Paysan/Publications/create-publication/create-publication.component';
import { ListePublicationComponent } from './Paysan/Publications/liste-publication/liste-publication.component';
import { DetailsPublicationComponent } from './Paysan/Publications/details-publication/details-publication.component';
import { UpdatePublicationComponent } from './Paysan/Publications/update-publication/update-publication.component';
import { DetailsPublicationsComponent } from './details-publications/details-publications.component';








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

    ChangePasswordComponent,
    PasswordAdminComponent,
    ProfilAdminComponent,

    AjoutEmployeComponent,
    ListeEmployeComponent,
    UpdateEmployeComponent,
    //AssigneTache
    AssignerTacheComponent,
    UpdateAssignationTacheComponent,
    //Eau
    AjoutEauComponent,
    ListEauComponent,
    UpdateEauComponent,
    DetailsEauComponent,
    AjoutParcelleAgricoleComponent,
    ListParcelleAgricoleComponent,
    UpdateParcelleAgricoleComponent,
    DetailsParcelleAgricoleComponent,
    AjoutMaterielComponent,
    ListMaterielComponent,
    UpdateMaterielComponent,
    DetailsMaterielComponent,
     PasswordOublierComponent,
    HeaderEmployeComponent,
    ProfilEmployeComponent,
    PasswordEmployeComponent,
    BarChartComponent,
    LineChartComponent,
    BarChart1Component,
    BarChart2Component,
    ProfilComponent,
    PasswordPaysanComponent,
    AssignationtacheListComponent,
    ListeTacheEnAttenteComponent,
    ListeTacheValiderComponent,
    ValiderTachesComponent,
    AjoutImageTacheComponent,
    CreatePublicationComponent,
    ListePublicationComponent,
    DetailsPublicationComponent,
    UpdatePublicationComponent,
    DetailsPublicationsComponent,
    



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
