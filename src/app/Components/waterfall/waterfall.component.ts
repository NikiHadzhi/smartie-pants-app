import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.css'],
})
export class WaterfallComponent implements OnInit {
  waterfalls: any;
  constructor(private httpClient: HttpClient) {
    this.waterfalls = [];
  }

  ngOnInit(): void {
    this.httpClient
      .get<any>('https://localhost:7146/api/GetWaterfalls')
      .subscribe((res) => {
        this.waterfalls = res;
      });
  }
}
