import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-instances',
  templateUrl: './add-instances.component.html',
  styleUrls: ['./add-instances.component.css'],
})
export class AddInstancesComponent {
  inputValue = 0;
  waterfalls: any;
  constructor(private httpClient: HttpClient) {
    this.waterfalls = [];
  }

  getData(value: string) {
    if (parseInt(value) > 0) {
      this.inputValue = parseInt(value);
      this.httpClient
        .post(
          'https://localhost:7146/api/AddInstances?number=' + this.inputValue,
          null
        )
        .subscribe((res) => {
          console.log(res);

          this.waterfalls = res;
        });
    } else {
      alert('Invalid number');
    }
  }
}
