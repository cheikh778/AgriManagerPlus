import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EauService } from 'src/app/eau.service';
import { Eau } from 'src/app/modeles';

@Component({
  selector: 'app-update-eau',
  templateUrl: './update-eau.component.html',
  styleUrls: ['./update-eau.component.scss']
})
export class UpdateEauComponent {

  successMessage: string | undefined;
  errorMessage: string | undefined;

  id!: number;
  eau : Eau = {
    eauId:0,
    source:'',
    quantite: 0,

  };
  constructor(private eauService: EauService, private route: ActivatedRoute, private router: Router) { }

  private getEauById() {
    this.id = this.route.snapshot.params['id'];
    this.eauService.getEauParId(this.id).subscribe({
      next: (data) => {
        this.eau = data;
        console.log("eau : ",this.eau )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getEauById();
  }

  updateEau() {
    this.eauService.updateEau(this.id, this.eau).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage="Modification réussie";

        setTimeout(() => {
          this.redirectToEauList();

        }, 2000);

      },
      error: (e) => {
        console.log(e);
        this.errorMessage="Une Erreur s'est produite lors de la modification"
      }
    });
  }

  redirectToEauList() {
    this.router.navigate(['listeEau']);
  }

  onSubmit() {
    console.log(this.eau);
    this.updateEau();
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
