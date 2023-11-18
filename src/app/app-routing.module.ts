import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TermesComponent } from './termes/termes.component';
import {AjoutCultureComponent} from "./Paysan/ajout-culture/ajout-culture.component";
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component'

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'conditions', component:ConditionsComponent},
  { path: 'termes', component:TermesComponent},
  { path: 'login', component:LoginPageComponent },
  { path: 'register', component:RegisterPageComponent },
  { path: 'blog', component:BlogComponent},
  { path:  'ajoutCulture', component:AjoutCultureComponent},
  { path: 'paysanDashboard', component:DashboardPComponent},
  { path: 'adminDashboard', component:DashboardAComponent},
  { path:'pageNotAuthorized', component:Page403Component},
  { path:'', component:Page404Component},
  { path:'listeProjet', component:ListeProjetEnAttenteComponent},
  { path:'listeUser', component:ListeUtilisateursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
