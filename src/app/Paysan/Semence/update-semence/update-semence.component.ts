import { Component } from '@angular/core';
import { SemenceService } from 'src/app/semence.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Semence } from 'src/app/modeles';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-semence',
  templateUrl: './update-semence.component.html',
  styleUrls: ['./update-semence.component.scss']
})
export class UpdateSemenceComponent {
  id!: number;
  semence : Semence = {
    id:0,
    nom:'',
    description: '',
    typeSemence: '',
    quantite: 0,
  };
  constructor(private semenceService: SemenceService, private route: ActivatedRoute, private router: Router) { }

  private getSemenceById() {
    this.id = this.route.snapshot.params['id'];
    this.semenceService.getSemenceParId(this.id).subscribe({
      next: (data) => {
        this.semence = data;
        console.log("semence : ",this.semence )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getSemenceById();
  }

  updateSemence() {
    this.semenceService.updateSemence(this.id, this.semence).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToSemenceList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToSemenceList() {
    this.router.navigate(['listeSemence']);
  }

  onSubmit() {
    console.log(this.semence);
    this.updateSemence();
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
