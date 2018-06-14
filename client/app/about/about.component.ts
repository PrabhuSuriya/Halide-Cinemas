import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data: any;
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('/rest/calendars/2').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
