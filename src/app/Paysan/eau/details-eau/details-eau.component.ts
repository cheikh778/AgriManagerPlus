import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EauService } from 'src/app/eau.service';
import { Eau } from 'src/app/modeles';

@Component({
  selector: 'app-details-eau',
  templateUrl: './details-eau.component.html',
  styleUrls: ['./details-eau.component.scss']
})
export class DetailsEauComponent {
  eauId:number =0
  eau:Eau | undefined

  constructor(private route:ActivatedRoute,private eauService:EauService){

  }
  ngOnInit(): void {
    this.eauId=this.route.snapshot.params['eauId'];
    // this.eau=new Eau();
    this.eauService.getEauParId(this.eauId).subscribe(data=>{
      this.eau=data;
    })
}
}