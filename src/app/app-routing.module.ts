import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCultureComponent } from "./Paysan/Culture/ajout-culture/ajout-culture.component";
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { ListeCultureComponent } from "./Paysan/Culture/liste-culture/liste-culture.component";
import { UpdateCultureComponent } from "./Paysan/Culture/update-culture/update-culture.component";
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page401Component } from './page401/page401.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TermesComponent } from './termes/termes.component';
//Semence
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { AjoutSemenceComponent } from "./Paysan/Semence/ajout-semence/ajout-semence.component";
import { ListeSemenceComponent } from "./Paysan/Semence/liste-semence/liste-semence.component";
import { UpdateSemenceComponent } from "./Paysan/Semence/update-semence/update-semence.component";
//Tache
import { AjoutTacheComponent } from "./Paysan/Tache/ajout-tache/ajout-tache.component";
import { ListeTacheComponent } from "./Paysan/Tache/liste-tache/liste-tache.component";
import { UpdateTacheComponent } from "./Paysan/Tache/update-tache/update-tache.component";
//Employe
import { AjoutEmployeComponent } from './Paysan/Employe/ajout-employe/ajout-employe.component';
import { ListeEmployeComponent } from './Paysan/Employe/liste-employe/liste-employe.component';
import { UpdateEmployeComponent } from './Paysan/Employe/update-employe/update-employe.component';


//eau
import { PasswordAdminComponent } from './Admin/password-admin/password-admin.component';
import { ProfilAdminComponent } from './Admin/profil-admin/profil-admin.component';
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { AjoutEauComponent } from './Paysan/eau/ajout-eau/ajout-eau.component';
import { DetailsEauComponent } from './Paysan/eau/details-eau/details-eau.component';
import { ListEauComponent } from './Paysan/eau/list-eau/list-eau.component';
import { UpdateEauComponent } from './Paysan/eau/update-eau/update-eau.component';
import { ProfilComponent } from './Paysan/profil/profil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PasswordOublierComponent } from './password-oublier/password-oublier.component';
import { PublicationsComponent } from './publications/publications.component';
import { AuthGuard } from "./shared/auth.guard";


//Employee
import { DashboardEComponent } from './Employee/dashboard-e/dashboard-e.component';

import { ListeTacheEnAttenteComponent } from './Employee/liste-tache-en-attente/liste-tache-en-attente.component';
import { ListeTacheValiderComponent } from './Employee/liste-tache-valider/liste-tache-valider.component';
import { ValiderTachesComponent } from './Employee/valider-taches/valider-taches.component';


import { PasswordEmployeComponent } from './Employee/password-employe/password-employe.component';
import { ProfilEmployeComponent } from './Employee/profil-employe/profil-employe.component';
import { PasswordPaysanComponent } from './Paysan/password-paysan/password-paysan.component';
import { AjoutMaterielComponent } from './Paysan/materiels/ajout-materiel/ajout-materiel.component';
import { UpdateMaterielComponent } from './Paysan/materiels/update-materiel/update-materiel.component';
import { ListMaterielComponent } from './Paysan/materiels/list-materiel/list-materiel.component';
import { DetailsMaterielComponent } from './Paysan/materiels/details-materiel/details-materiel.component';
import { AjoutParcelleAgricoleComponent } from './Paysan/parcellagricole/ajout-parcelle-agricole/ajout-parcelle-agricole.component';
import { ListParcelleAgricoleComponent } from './Paysan/parcellagricole/list-parcelle-agricole/list-parcelle-agricole.component';
import { UpdateParcelleAgricoleComponent } from './Paysan/parcellagricole/update-parcelle-agricole/update-parcelle-agricole.component';
import { DetailsParcelleAgricoleComponent } from './Paysan/parcellagricole/details-parcelle-agricole/details-parcelle-agricole.component';
import { AssignerTacheComponent } from './Paysan/AssignerTache/assigner-tache/assigner-tache.component';

import { UpdateAssignationTacheComponent } from './Paysan/AssignerTache/update-assignation-tache/update-assignation-tache.component';
import { DetailsAssignationTacheComponent } from './Paysan/AssignerTache/details-assignation-tache/details-assignation-tache.component';
import { AssignationtacheListComponent } from './Paysan/AssignerTache/assignationtache-list/assignationtache-list.component';
import { CreatePublicationComponent } from './Paysan/Publications/create-publication/create-publication.component';
import { ListePublicationComponent } from './Paysan/Publications/liste-publication/liste-publication.component';
import { DetailsPublicationsComponent } from './details-publications/details-publications.component';
import { UpdatePublicationComponent } from './Paysan/Publications/update-publication/update-publication.component';
import { DetailsPublicationComponent } from './Paysan/Publications/details-publication/details-publication.component';



const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'conditions', component:ConditionsComponent},
  { path: 'termes', component:TermesComponent},
  { path: 'login', component:LoginPageComponent },
  { path: 'register', component:RegisterPageComponent },
  { path: 'blog', component:BlogComponent},
  { path: 'paysanDashboard', component:DashboardPComponent, canActivate:[AuthGuard], data:{role:'paysan'}},
  { path: 'adminDashboard', component:DashboardAComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path: 'employeeDashboard',  component:DashboardEComponent,canActivate:[AuthGuard], data:{role:'employe'}},
  { path:'listeProjet', component:ListeProjetEnAttenteComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeUser', component:ListeUtilisateursComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'ajoutUser', component:AjoutUtilisateurComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeCultures', component:ListeCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'ajoutCulture', component:AjoutCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateCulture/:id', component:UpdateCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


  //Semence
  { path:'ajoutSemence', component:AjoutSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeSemence', component:ListeSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateSemence/:id', component:UpdateSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


  //Tache
  { path:'ajoutTache', component:AjoutTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateTache/:id', component:UpdateTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path: 'listeTache', component: ListeTacheComponent, canActivate: [AuthGuard], data: { roles: ['paysan', 'employee'] } },


  //Employee
  { path:'listeEmployee', component:ListeEmployeComponent, canActivate:[AuthGuard], data:{roles: ['paysan', 'employee'] } },
  { path:'ajoutEmployee', component:AjoutEmployeComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateEmployee/:id', component:UpdateEmployeComponent, canActivate:[AuthGuard], data:{role:'paysan'} },

  //eau
  { path:'ajoutEau', component:AjoutEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateEau/:id', component:UpdateEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'eau-datails/:eauId', component:DetailsEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeEau', component:ListEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


   //materiel
   { path:'ajoutMateriel', component:AjoutMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'updateMateriel/:id', component:UpdateMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'materiel-datails/:eauId', component:DetailsMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'listeMateriel', component:ListMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


   //parcell
   { path:'ajoutParcelle', component:AjoutParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'updateParcelle/:id', component:UpdateParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'parcelle-datails/:eauId', component:DetailsParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
   { path:'listeParcelle', component:ListParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  //


   //assignation tache
   { path:'assignationTache', component:AssignerTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
    { path:'updateAssignation/:id', component:UpdateAssignationTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
    { path:'assignation-datails/:eauId', component:DetailsAssignationTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
    { path:'listAssignation', component:AssignationtacheListComponent, canActivate:[AuthGuard], data:{role: 'paysan'} },

    //publications partie paysan
    { path:'createPost', component:CreatePublicationComponent},
    { path:'listePublication', component:ListePublicationComponent},
    { path:'updatePublication', component:UpdatePublicationComponent},
    { path:'detailsPublications', component:DetailsPublicationComponent},
    //tout public
    { path: 'publications', component: PublicationsComponent},
    { path: 'details', component:DetailsPublicationsComponent},


  //profil
  { path:'profilAdmin', component:ProfilAdminComponent, canActivate:[AuthGuard], data:{role:'admin'}},
  { path:'AdminChangePassword', component:PasswordAdminComponent, canActivate:[AuthGuard], data:{role:'admin'}},
  { path:'profilPaysan', component:ProfilComponent},
  { path:'changePassword/:cle', component:ChangePasswordComponent},
  { path:'changePassword', component:PasswordOublierComponent},
  //profil Paysan
  { path:'profilPaysan', component:ProfilComponent, canActivate:[AuthGuard], data:{role:'paysan'}},
  { path: 'paysanChangePassword', component:PasswordPaysanComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  //profil Employe
  { path:'profilEmploye', component:ProfilEmployeComponent},
  { path:'employeChangePassword', component:PasswordEmployeComponent},
//tout public
  { path:'changePassword', component:ChangePasswordComponent},
  //Employee
  { path:'tacheEnAttente', component:ListeTacheEnAttenteComponent,canActivate:[AuthGuard], data:{role:'employe'} },
  { path:'tacheValider', component:ListeTacheValiderComponent,canActivate:[AuthGuard], data:{role:'employe'} },
  { path:'validerTache', component:ValiderTachesComponent,canActivate:[AuthGuard], data:{role:'employe'} },







  /*ne touche plus cette partie*/
  { path: 'forbidden', component:Page403Component},
  { path: 'pageNotAuthorized', component:Page401Component},
  { path:'**', component:Page404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
