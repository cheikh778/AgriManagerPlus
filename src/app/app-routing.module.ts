import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TermesComponent } from './termes/termes.component';
import {AjoutCultureComponent} from "./Paysan/Culture/ajout-culture/ajout-culture.component";
import { DashboardPComponent } from './Paysan/dashboard-p/dashboard-p.component';
import { DashboardAComponent } from './Admin/dashboard-a/dashboard-a.component';
import { AjoutUtilisateurComponent } from './Admin/ajout-utilisateur/ajout-utilisateur.component';
import { ListeUtilisateursComponent } from './Admin/liste-utilisateurs/liste-utilisateurs.component';
import { ListeProjetEnAttenteComponent } from './liste-projet-agricole/liste-projet-en-attente.component';
import { ListeCultureComponent } from "./Paysan/Culture/liste-culture/liste-culture.component";
import { UpdateCultureComponent } from "./Paysan/Culture/update-culture/update-culture.component";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'conditions', component:ConditionsComponent},
  { path: 'termes', component:TermesComponent},
  { path: 'login', component:LoginPageComponent },
  { path: 'register', component:RegisterPageComponent },
  { path: 'blog', component:BlogComponent},
  { path:  'ajoutCulture', component:AjoutCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path: 'paysanDashboard', component:DashboardPComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path: 'adminDashboard', component:DashboardAComponent, canActivate:[AuthGuard], data:{role:'admin'} }, 
  { path:'pageNotAuthorized', component:Page403Component},
  { path:'', component:Page404Component},
  { path:'listeProjet', component:ListeProjetEnAttenteComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeUser', component:ListeUtilisateursComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'ajoutUser', component:AjoutUtilisateurComponent, canActivate:[AuthGuard], data:{role:'admin'} },
  { path:'listeCulture', component:ListeCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  { path:'updateCulture/:id', component:UpdateCultureComponent, canActivate:[AuthGuard], data:{role:'paysan'} },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
