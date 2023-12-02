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
   
    this.showProfileDropdown = false;
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
   
    this.showNotificationDropdown = false;
  }

  culture : Culture[] = [];

  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number = 0;

  errorMessage = "";
  sucessMessage= "";

  constructor(private cultureService : CultureService,private _router: Router){}

  ngOnInit(): void {
    this.loadCultures();
    
    this.cultureService.getCulturesByPaysan().subscribe(
    {next : (apps: Culture[]) => {
      this.culture = apps;
    },
    error:() =>{
      this.errorMessage="Erreur de requete"
    },
    complete:() =>{
      this.sucessMessage="Requete valider"
    }
   } )
  }

  private getEmployees() {
    this.cultureService.getCultures().subscribe({
      next: (apps) => {
        this.culture = apps;
      },  
      error: (err) => {
        this.errorMessage = "Erreur de la requête";
      },
      complete: () => {
        this.sucessMessage = "Requête valide";
      }
    });
  }


  modifierCulture(cultureId: number) {

    console.log("id : ",cultureId)
    this._router.navigate(['updateCulture', cultureId]);
  }

  deleteCulture(cultureId: number) {
    this.cultureService.supprimerCulture(cultureId).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToCultureList() {
    this._router.navigate(['listeCulture']);
  }

  loadCultures(): void {
    this.cultureService.getCulturesByPaysan().subscribe({
      next: (data: Culture[]) => {
        this.totalItems = data.length;
        this.culture = this.paginateData(data);
      },
      error: () => {
        console.error("Erreur de requête");
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCultures();
  }

  paginateData(data: Culture[]): Culture[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
}





