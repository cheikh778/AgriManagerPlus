import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { AjoutCultureComponent } from "./Paysan/Culture/ajout-culture/ajout-culture.component";
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
import { UpdateTacheComponent } from "./Paysan/Tache/update-tache/update-tache.component";
import { ListeTacheComponent } from "./Paysan/Tache/liste-tache/liste-tache.component";
//eau
import { AjoutEauComponent } from './Paysan/eau/ajout-eau/ajout-eau.component';
import { UpdateEauComponent } from './Paysan/eau/update-eau/update-eau.component';
import { ListEauComponent } from './Paysan/eau/list-eau/list-eau.component';
import { DetailsEauComponent } from './Paysan/eau/details-eau/details-eau.component';
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { AuthGuard } from "./shared/auth.guard";
import { AjoutParcelleAgricoleComponent } from './Paysan/parcellagricole/ajout-parcelle-agricole/ajout-parcelle-agricole.component';
import { UpdateParcelleAgricoleComponent } from './Paysan/parcellagricole/update-parcelle-agricole/update-parcelle-agricole.component';
import { DetailsParcelleAgricoleComponent } from './Paysan/parcellagricole/details-parcelle-agricole/details-parcelle-agricole.component';
import { ListParcelleAgricoleComponent } from './Paysan/parcellagricole/list-parcelle-agricole/list-parcelle-agricole.component';
import { AjoutMaterielComponent } from './Paysan/materiels/ajout-materiel/ajout-materiel.component';
import { DetailsMaterielComponent } from './Paysan/materiels/details-materiel/details-materiel.component';
import { UpdateMaterielComponent } from './Paysan/materiels/update-materiel/update-materiel.component';
import { ListMaterielComponent } from './Paysan/materiels/list-materiel/list-materiel.component';
import { PublicationsComponent } from './publications/publications.component';





const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'publications', component: PublicationsComponent},
  { path: 'conditions', component:ConditionsComponent},
  { path: 'termes', component:TermesComponent},
  { path: 'login', component:LoginPageComponent },
  { path: 'register', component:RegisterPageComponent },
  { path: 'blog', component:BlogComponent},
  { path: 'paysanDashboard', component:DashboardPComponent, canActivate:[AuthGuard], data:{role:'paysan'}},
  { path: 'adminDashboard', component:DashboardAComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeProjet', component:ListeProjetEnAttenteComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeUser', component:ListeUtilisateursComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'ajoutUser', component:AjoutUtilisateurComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeCulture', component:ListeCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'ajoutCulture', component:AjoutCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateCulture/:id', component:UpdateCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  //Semence
  { path:'ajoutSemence', component:AjoutSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeSemence', component:ListeSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateSemence/:id', component:UpdateSemenceComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  //Tache
  { path:'ajoutTache', component:AjoutTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateTache/:id', component:UpdateTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeTache', component:ListeTacheComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


  //eau
  { path:'ajoutEau', component:AjoutEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateEau/:id', component:UpdateEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'eau-datails/:eauId', component:DetailsEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeEau', component:ListEauComponent, canActivate:[AuthGuard], data:{role:'paysan'} },

  //parcelle agriccole
  { path:'ajoutParcelle', component:AjoutParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateParcelle/:id', component:UpdateParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'parcelle-datails/:id', component:DetailsParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeParcelle', component:ListParcelleAgricoleComponent, canActivate:[AuthGuard], data:{role:'paysan'} },

  //materiel
  { path:'ajoutMateriel', component:AjoutMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateMateriel/:id', component:UpdateMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'materiel-datails/:id', component:DetailsMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'listeMateriel', component:ListMaterielComponent, canActivate:[AuthGuard], data:{role:'paysan'} },


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
