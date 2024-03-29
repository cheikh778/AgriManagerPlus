import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.scss']
})
export class UpdateTacheComponent {

  errorMessage: string | undefined;
  successMessage:string | undefined;

  id!: number;
  tache : Tache = {
    idTache:0,
    nomTache:'',
    description: '',

  };
  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  private getTacheById() {
    this.id = this.route.snapshot.params['id'];
    this.tacheService.getTacheParId(this.id).subscribe({
      next: (data) => {
        this.tache = data;
        console.log("semence : ",this.tache )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getTacheById();
  }

  updateTache() {
    this.tacheService.updateTache(this.id, this.tache).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage="Mise à jour réussie!"
        setTimeout(() => {
          this.redirectToTacheList();

        }, 2000);

      },
      error: (e) => {

        console.log(e);
        this.errorMessage="Une erreur s'est produite lors de la modification. Veuillez réessayer plus tard!"
        setTimeout(() => {
          this.redirectToTacheList();

        }, 2000);
      }
    });
  }

  redirectToTacheList() {
    this.router.navigate(['listeTache']);
  }

  onSubmit() {
    console.log(this.tache);
    this.updateTache();
  }




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
}
