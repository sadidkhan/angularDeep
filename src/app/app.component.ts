import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };
  public barChartLabels: string[] = ["session1", "session2", "session3", "session4"];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}];

  public changeData(): any{
    this.barChartData = [
      {data: [10, 2, 80, 81, 36, 55, 40], label: 'Series D'},
      {data: [28, 87, 40, 19, 67, 27, 9], label: 'Series E'},
      {data: [18, 48, 66, 9, 58, 27, 40], label: 'Series F'}
    ];
  }
}
