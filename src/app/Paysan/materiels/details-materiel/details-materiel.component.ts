import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterielService } from 'src/app/materiel.service';
import { Materiel } from 'src/app/modeles';

@Component({
  selector: 'app-details-materiel',
  templateUrl: './details-materiel.component.html',
  styleUrls: ['./details-materiel.component.scss']
})
export class DetailsMaterielComponent {
  materiel_id:number =0
  materiel:Materiel | undefined

  constructor(private route:ActivatedRoute,private materielService:MaterielService){

  }
  ngOnInit(): void {
    this.materiel_id=this.route.snapshot.params['id'];
    // this.eau=new Eau();
    this.materielService.getMaterielParId(this.materiel_id).subscribe(data=>{
      this.materiel=data;
    })
}
}
