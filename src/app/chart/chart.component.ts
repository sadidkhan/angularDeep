import { Component, OnInit, Input } from '@angular/core';
var c3: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() xaxisLabel: string;
  @Input() xaixsValues: any;
  @Input() chartName: any;
  @Input() yaxisValues: any;

  constructor() { }

  ngOnInit() {
    console.log("chart");
    console.log(this.xaxisLabel);
    console.log(this.xaixsValues);
    console.log(this.chartName);
    console.log(this.yaxisValues);
    this.drawChart();      
    
  }


  drawChart() {
    console.log("inside");
    var chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: [this.yaxisValues],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        },
        axis: {
            x: {
                type: "category",
                categories: this.xaixsValues
            },
            y: {
                label: {
                    text: 'Number Of Death/Injured',
                    position: 'outer-middle'
                }
            }
        }
    });

}
}
