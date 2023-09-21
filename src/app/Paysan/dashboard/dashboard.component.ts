import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent /* implements OnInit  */{
/*   lineChart: any;

  ngOnInit(): void {
    this.initializeLineChart();
  }

  initializeLineChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('lineChart');
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      this.lineChart = new Chart(ctx,{
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Earnings in $',
              data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
              backgroundColor: [
                  'rgba(85,85,85, 1)'

              ],
              borderColor: 'rgb(40, 170, 69)',

              borderWidth: 1
          }]
      },
      options: {
          responsive: true
      }
  });
}
} */
}
