import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/app/materiel.service';
import { Materiel } from 'src/app/modeles';

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.scss']
})
export class UpdateMaterielComponent {
  id!: number;
  materiel : Materiel = {
    materielId:0,
    nom:'',
    type: '',
    description: '',
    quantite: 0,
  };
  constructor(private materielService: MaterielService, private route: ActivatedRoute, private router: Router) { }

  private getMaterielById() {
    this.id = this.route.snapshot.params['id'];
    this.materielService.getMaterielParId(this.id).subscribe({
      next: (data) => {
        this.materiel = data;
        console.log("parcelle : ",this.materiel )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getMaterielById();
  }

  updateMateriel() {
    this.materielService.updateMateriel(this.id, this.materiel).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToMaterielList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToMaterielList() {
    this.router.navigate(['listeMateriel']);
  }

  submitForm() {
    console.log(this.materiel);
    this.updateMateriel();
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
