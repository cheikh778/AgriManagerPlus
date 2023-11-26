import { Component } from '@angular/core';
import { CultureService } from 'src/app/culture.service';
import { Culture } from 'src/app/modeles';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'update-culture',
  templateUrl: './update-culture.component.html',
  styleUrls: ['./update-culture.component.scss']
})
export class UpdateCultureComponent {

  id!: number;
  culture: Culture = { id: 0, nom: '', dateDebut: new Date(), dateFin: new Date(), paysan: null };

  constructor(private cultureService: CultureService, private route: ActivatedRoute, private router: Router) { }

  private getCandidatById() {
    this.id = this.route.snapshot.params['id'];
    this.cultureService.getCultureParId(this.id).subscribe({
      next: (data) => {
        this.culture = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getCandidatById();
  }

  updateCandidat() {
    this.cultureService.updateCulture(this.id, this.culture).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToCultureList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToCultureList() {
    this.router.navigate(['listeCulture']);
  }

  onSubmit() {
    console.log(this.culture);
    this.updateCandidat();
  }

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
}
