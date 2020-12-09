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
    {data: [125, 150, 77, 98, 130, 88], label: 'This Job'}
  ];
  public radarChartType = 'radar';
  public radarChartOptions: RadialChartOptions = {
    responsive: false,
  };
  constructor() { }
  ngOnInit(): void {
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
