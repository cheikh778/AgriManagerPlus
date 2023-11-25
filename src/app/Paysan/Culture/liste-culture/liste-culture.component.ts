import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Culture } from 'src/app/modeles';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';

@Component({
  selector: 'liste-culture',
  templateUrl: './liste-culture.component.html',
  styleUrls: ['./liste-culture.component.scss']
})
export class ListeCultureComponent {

  status = false;
  showNotificationDropdown = false;
  showProfileDropdown = false;

  addToggle() {
    this.status = !this.status;
  }

  toggleNotificationDropdown() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
    // Si vous souhaitez masquer l'autre dropdown lorsque celui-ci est ouvert
    this.showNotificationDropdown = false;
  }

  culture : Culture[] = [];

  errorMessage = "";
  sucessMessage= "";

  constructor(private cultureSevice : CultureService,private _router: Router){}
  
  ngOnInit(): void {
    this.cultureSevice.getCultures().subscribe(
    {next : (apps) => {
      this.culture = apps;
    },
    error:(err) =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
   } )
  }

  modifierCulture(cultureId: number) {
    // Rediriger vers la page de mise à jour avec l'ID de la culture
    console.log("id : ",cultureId)
    this._router.navigate(['updateCulture', cultureId]);
  }

}
//   )
// }



// }
