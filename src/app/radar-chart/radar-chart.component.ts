import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  public radarChartLabels = ['Python', 'SQL', 'AWS', 'Apache Spark', 'Machine Learning', 'Angular.js',];
  public radarChartData = [
    {data: [100, 120, 90, 70, 42, 28], label: 'You'},
    {data: [85 + this.getRandomInt(50),
        10 + this.getRandomInt(50),
        27 + this.getRandomInt(50),
        38 + this.getRandomInt(50),
        30 + this.getRandomInt(50),
        58 + this.getRandomInt(50)], label: 'This Job'}
  ];
  public radarChartType = 'radar';
  public radarChartOptions: RadialChartOptions = {
    responsive: false,
  };
  public width = 250;
  public height = 250;
  constructor() { }
  ngOnInit(): void {
  }
  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
