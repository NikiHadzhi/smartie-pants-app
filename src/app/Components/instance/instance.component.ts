import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css'],
})
export class InstanceComponent implements OnInit {
  instances: any;
  constructor(private httpClient: HttpClient) {
    this.instances = [];
  }
  ngOnInit(): void {
    this.httpClient
      .get<any>('https://localhost:7146/api/GetInstances')
      .subscribe((res) => {
        this.instances = res;
        console.log(this.instances);
      });
  }
}
