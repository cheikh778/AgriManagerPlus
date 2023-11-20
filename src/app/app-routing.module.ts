import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { AjoutCultureComponent } from "./Paysan/Culture/ajout-culture/ajout-culture.component";
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TermesComponent } from './termes/termes.component';
<<<<<<< HEAD
import {AjoutCultureComponent} from "./Paysan/ajout-culture/ajout-culture.component";
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component'
=======
import { ListeCultureComponent } from './Paysan/Culture/liste-culture/liste-culture.component';
import { UpdateCultureComponent } from './Paysan/Culture/update-culture/update-culture.component';
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'conditions', component:ConditionsComponent},
  { path: 'termes', component:TermesComponent},
  { path: 'login', component:LoginPageComponent },
  { path: 'register', component:RegisterPageComponent },
  { path: 'blog', component:BlogComponent},
<<<<<<< HEAD
  { path:  'ajoutCulture', component:AjoutCultureComponent},
  { path: 'paysanDashboard', component:DashboardPComponent},
  { path: 'adminDashboard', component:DashboardAComponent},
  { path:'pageNotAuthorized', component:Page403Component},
  { path:'', component:Page404Component},
  { path:'listeProjet', component:ListeProjetEnAttenteComponent},
  { path:'listeUser', component:ListeUtilisateursComponent},
  { path:'ajoutUser', component:AjoutUtilisateurComponent},
  
=======
  { path: 'ajoutCulture', component:AjoutCultureComponent},
  { path: 'listeCulture', component:ListeCultureComponent},
  { path: 'updateCulture', component:UpdateCultureComponent},
  { path: 'paysanDashboard', component:DashboardPComponent},
  { path: 'adminDashboard', component:DashboardAComponent},
  { path:'pageNotAuthorized', component:Page403Component},
  { path:'**', component:Page404Component},
>>>>>>> 00c887a026285c701b8cc3e0ab4716dbbb2ae772

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
