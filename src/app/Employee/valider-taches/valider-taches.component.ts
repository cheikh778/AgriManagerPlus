import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignationTacheService } from 'src/app/assignationtache.service';
import { EmployeeService } from 'src/app/employee.service';
import { AssignationTache, Tache, User } from 'src/app/modeles';
import { TacheService } from 'src/app/tache.service';
@Component({
  selector: 'app-valider-taches',
  templateUrl: './valider-taches.component.html',
  styleUrls: ['./valider-taches.component.scss']
})
export class ValiderTachesComponent {
  
      assignation : AssignationTache[] = [];
      employee:User[]=[]
      tache:Tache[]=[]
      errorMessage = "";
      sucessMessage= "";
      message="";
    
      constructor(private assignerService: AssignationTacheService,private _router: Router,private employeService:EmployeeService,private tacheService:TacheService){}
    
      ngOnInit(): void {
        this.assignerService.getTacheEnAttente().subscribe(
        {next : (apps) => {
          this.assignation = apps;
        },
        error:(err) =>{
    
          console.log("Erreur de requete");
        },
        complete:() =>{
    
          console.log("Requete valider");
        }
       } )
       this.employeService.getEmployeeByPaysan().subscribe(
        {next : (apps) => {
          this.employee = apps;
          // this.getEmployees();
        },
        error:(err) =>{
          // this.errorMessage="Erreur de requete"
          console.log("Erreur de requete");
        },
        complete:() =>{
          // this.sucessMessage="Requete valider"
          console.log("Requete valider");
        }
       } )
       this.tacheService.getTachesParPaysan().subscribe((taches: Tache[]) => this.tache = taches);
      }
    
      private getEmployees() {
        this.assignerService.getAllAssignations().subscribe({
          next: (apps) => {
            this.assignation = apps;
          },
          error: (err) => {
            //this.errorMessage = "Erreur de la requête";
            console.log("Erreur de la requête");
          },
          complete: () => {
            //this.sucessMessage = "Requête valide";
            console.log("Requête valide");
          }
        });
      }
    
      modifierAssignation(assignationId: number) {
    
        console.log("id : ",assignationId)
        this._router.navigate(['updateAssignation', assignationId]);
      }
    
      deleteAssignationTache(assignationId: number) {
        this.assignerService.deleteAssignation(assignationId).subscribe({
          next: (data) => {
            console.log(data);
            this.getEmployees();
            this.sucessMessage="Suppression réussie";
           // this.message=this.sucessMessage;
          },
          error: (e) => {
            console.log(e);
            this.errorMessage="Erreur lors de la suppression, Veuillez réessayer plus tard."
            //this.message=this.errorMessage;
          }
        });
      }
      redirectToAssignationList() {
        this._router.navigate(['listAssignation']);
      }
    
      
    
      status = false;
      addToggle()
      {
        this.status = !this.status;
      }
    
      detailsAssignation(id: number) {
        this._router.navigate(['assignation-datails', id]);
      }
    
      getEmployeeName(employeeId: number): string {
        console.log('Employee ID:', employeeId);
        console.log('Employees:', this.employee);
    
        const employee = this.employee.find(e => e.id === employeeId);
        console.log('Found Employee:', employee);
    
        return employee ? `${employee.prenom} ${employee.nom}` : 'N/A';
      }
    
      getTaskName(taskId: number): string {
        console.log('Task ID:', taskId);
        console.log('Tasks:', this.tache);
    
        const task = this.tache.find(t => t.idTache === taskId);
        console.log('Found Task:', task);
    
        return task ? task.nomTache : 'N/A';
      }
    
      validerTache(t: AssignationTache): void {
    
        t.dateFin = new Date();
    
        t.status = 'valider';
    
    
        this.assignerService.validerTache(t.assignationId).subscribe(
          () => {
            console.log('Tâche validée avec succès');
    
            this.getEmployees();
          },
          (error) => {
            console.error('Erreur lors de la validation de la tâche', error);
          }
        );
      }
    }
    
  

