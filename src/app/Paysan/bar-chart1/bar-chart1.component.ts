import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.scss']
})
export class BarChart1Component implements OnInit{
  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
     type: 'bar',

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Cultures",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Tâches",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          } ,
          {
            label: "Semences",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'yellow'
          },
          {
            label: "Materiels",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'grey'
          },
          {
            label: "Employés",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'red'
          },
          {
            label: "Eaux",
            data: ['542', '500', '600', '300', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#2ECC71'
          },
          {
            label: "Parcelles Agricoles",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#E67E22'
          }        
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
