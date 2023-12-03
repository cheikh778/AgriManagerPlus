import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelleAgricole } from 'src/app/modeles';
import { ParcelleAgricoleService } from 'src/app/parcelle-agricole.service';

@Component({
  selector: 'app-update-parcelle-agricole',
  templateUrl: './update-parcelle-agricole.component.html',
  styleUrls: ['./update-parcelle-agricole.component.scss']
})
export class UpdateParcelleAgricoleComponent {
  id!: number;
  parcelle : ParcelleAgricole = {
    parcelle_id:0,
    parcelle_nom:'',
    parcelle_description: '',
    parcelle_location: '',
    parcelle_type: '',
  };
  constructor(private parcelleService: ParcelleAgricoleService, private route: ActivatedRoute, private router: Router) { }

  private getParcelleById() {
    this.id = this.route.snapshot.params['id'];
    this.parcelleService.getParcelleAgricoleParId(this.id).subscribe({
      next: (data) => {
        this.parcelle = data;
        console.log("parcelle : ",this.parcelle )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getParcelleById();
  }

  updateParcelle() {
    this.parcelleService.updateParcelleAgricole(this.id, this.parcelle).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToParcelleList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToParcelleList() {
    this.router.navigate(['listeParcelle']);
  }

  onSubmit() {
    console.log(this.parcelle);
    this.updateParcelle();
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
