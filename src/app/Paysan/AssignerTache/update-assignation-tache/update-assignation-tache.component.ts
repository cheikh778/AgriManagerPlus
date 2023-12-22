import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignationTacheService } from 'src/app/assignationtache.service';
import { EmployeeService } from 'src/app/employee.service';
import { AssignationTache, Tache, User } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';

@Component({
  selector: 'app-update-assignation-tache',
  templateUrl: './update-assignation-tache.component.html',
  styleUrls: ['./update-assignation-tache.component.scss']
})
export class UpdateAssignationTacheComponent {
  employe: User[] = [];
  tache: Tache[] = [];

  assigner: AssignationTache = {
    assignationId: 0,
    dateDebut: new Date(),
    dateFin: new Date(),
    employee: this.employe[0],
    tache: this.tache[0],
    nomEmploye:'',
    nomTache:'' ,
    status: 'en_attente',
    image:'enAttente'
  };
  errorMessage = "";
  successMessage = "";
  taches: Tache[] = [];

  constructor(
    private assignationService: AssignationTacheService,
    private employeService: EmployeeService,
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const assignationId = this.route.snapshot.params['id'];

    this.employeService.getEmployeeByPaysan().subscribe(
      {
        next: (apps) => {
          this.employe = apps;
        },
        error: (err) => {
          this.errorMessage = "Erreur de requete";
        },
        complete: () => {
          this.successMessage = "Requete valider";
        }
      }
    );

    this.tacheService.getTachesParPaysan().subscribe((taches: Tache[]) => this.taches = taches);

    this.assignationService.getAssignationById(assignationId).subscribe(
      (assignation) => {
        this.assigner = assignation;
        console.log("assigner",this.assigner)
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'assignation', error);
      }
    );
  }

  updateForm() {
    console.log('Formulaire mis à jour', this.assigner);
    this.assignationService.updateAssignation(this.assigner.assignationId, this.assigner)
      .subscribe(
        (response) => {
          this._router.navigate(['listAssignation']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour', error);
          if (error.error) {
            console.error('Contenu de l\'erreur :', JSON.stringify(error.error, null, 2));
          }
        }
      );
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
