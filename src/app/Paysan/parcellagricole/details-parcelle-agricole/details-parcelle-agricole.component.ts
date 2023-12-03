import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcelleAgricole } from 'src/app/modeles';
import { ParcelleAgricoleService } from 'src/app/parcelle-agricole.service';

@Component({
  selector: 'app-details-parcelle-agricole',
  templateUrl: './details-parcelle-agricole.component.html',
  styleUrls: ['./details-parcelle-agricole.component.scss']
})
export class DetailsParcelleAgricoleComponent {
  parcelle_id:number =0
  parcelle:ParcelleAgricole | undefined

  constructor(private route:ActivatedRoute,private parcelleService:ParcelleAgricoleService){

  }
  ngOnInit(): void {
    this.parcelle_id=this.route.snapshot.params['id'];
    // this.eau=new Eau();
    this.parcelleService.getParcelleAgricoleParId(this.parcelle_id).subscribe(data=>{
      this.parcelle=data;
    })
}
}
