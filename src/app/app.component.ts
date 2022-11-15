import { Component } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a2';

  public canvas : any;
  public ctx: any;
  public chartMoney: any;

  ngOnInit() {
    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
        data: [20, 25, 27, 23, 1900, 700, 3900, 3700, 3785, 1300, 2000, 1500],
        fill: false,
        borderColor: '#0D3D40',
        backgroundColor: '#244447',
        pointBorderColor: '#0D3D40',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

    var speedData = {
        labels: ["0", "0.5", "01", "02", "05", "08.5", "11.5", "14", "15.7", "17.5", "20.8", "24"],
        datasets: [dataFirst]
      };

    var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

    var lineChart = new Chart(speedCanvas as HTMLCanvasElement , {
        type: 'line',
        data: speedData
      });
  }
}
