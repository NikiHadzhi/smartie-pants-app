import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highest-revenue',
  templateUrl: './highest-revenue.component.html',
  styleUrls: ['./highest-revenue.component.css'],
})
export class HighestRevenueComponent implements OnInit {
  waterfall: any;
  constructor(private httpClient: HttpClient) {
    this.waterfall = {};
  }
  ngOnInit(): void {
    this.httpClient
      .get<any>('https://localhost:7146/api/GetWaterfallWithHighestRevenue')
      .subscribe((res) => {
        console.log(res);

        this.waterfall = res;
      });
  }
}
