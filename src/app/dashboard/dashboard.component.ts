import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adService : AdService) { }

  data: any;
  ngOnInit() {
    this.getData();
  }

  getData(){
    this.adService.getData().subscribe((data: any)=> {

      console.log(data);
      this.data = data;

    });
  }

}
