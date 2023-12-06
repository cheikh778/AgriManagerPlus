import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/modeles';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss']
})
export class UpdateEmployeComponent {
  successMessage: string | undefined;
  errorMessage: string | undefined;

  id!: number;
  user : User = {
    id : 0,
    nom : '',
    prenom : '',
    contact : '',
    email : '',
    password : '',
    role : '',
    status : '',
    photo: '',
  };
  constructor(private userService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  private getUserById() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserParId(this.id).subscribe({
      next: (data) => {
        this.user = data;
        console.log("semence : ",this.user )
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getUserById();
  }

  updateSemence() {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (data) => {
        console.log(data);

        this.successMessage = 'Modification réussie. ';

          setTimeout(() => {
            this.redirectToSemenceList();
          }, 2000);

      },
      error: (e) => {
        console.log(e);

        this.errorMessage = 'une erreur s\'est produite lors de la modification. Veuillez réessayer plus tard';

          setTimeout(() => {
            this.redirectToSemenceList();
          }, 2000);
      }
    });
  }

  redirectToSemenceList() {
    this.router.navigate(['listeEmployee']);
  }

  onSubmit() {
    console.log(this.user);
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
