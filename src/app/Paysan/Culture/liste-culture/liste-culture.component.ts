import { Component, TemplateRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Culture } from 'src/app/modeles';
import { Router } from '@angular/router';
import { CultureService } from 'src/app/culture.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'liste-culture',
  templateUrl: './liste-culture.component.html',
  styleUrls: ['./liste-culture.component.scss']
})
export class ListeCultureComponent {
  bsModalRef!: BsModalRef;

  status = false;
  showNotificationDropdown = false;
  showProfileDropdown = false;
  dialog: any;

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
  successMessage= "";

  constructor(private cultureService : CultureService,private _router: Router, private modalService: BsModalService){}

  ngOnInit(): void {
    this.loadCultures();

    this.cultureService.getCulturesByPaysan().subscribe(
    {next : (apps: Culture[]) => {
      this.culture = apps;
    },
    error:() =>{
      console.log("Erreur de requete");

    },
    complete:() =>{
      console.log("Requete valider");


    }
   } )
  }

  private getEmployees() {
    this.cultureService.getCultures().subscribe({
      next: (apps) => {
        this.culture = apps;
      },
      error: (err) => {

        this.errorMessage = "Nouvelle liste";
      },
      complete: () => {
        this.successMessage = "Invalide";
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

        this.successMessage = "Suppression reussie";

        this.getEmployees();
      },
      error: (e) => {

        this.errorMessage="Erreur  lors de la suppression";
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





