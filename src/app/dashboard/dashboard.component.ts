import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adService: AdService) { }

  data: any;
  chartName : string = "";
  xaxisLabel: string = "";
  graphData: any = {};
  xaxisValue = [];
  yaxisValue = [];
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.adService.getData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  generateDataForGraph(fieldName) {
    this.chartName = "Death/Injured per" + fieldName;
    this.xaxisLabel = fieldName;
    this.graphData = {};
    this.xaxisValue = [];
    this.yaxisValue = [];
    if (this.data.length) {

      for (var i = 0; i < this.data.length; i++) {

        if (!this.graphData.hasOwnProperty(this.data[i][fieldName])) {
          this.graphData[this.data[i][fieldName]] = 0;
        }
        if (this.graphData.hasOwnProperty(this.data[i][fieldName])) {
          this.graphData[this.data[i][fieldName]] = this.graphData[this.data[i][fieldName]] + this.data[i].Quantity;
        }
      }
      for (var j in this.graphData) {

        this.xaxisValue.push(j);
        this.yaxisValue.push(this.graphData[j]);
      }
    }




    console.log(this.xaxisValue, this.yaxisValue);
  }

}
