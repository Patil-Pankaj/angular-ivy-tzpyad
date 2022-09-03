import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jQuery: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  billing: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>(
        'https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json'
      )
      .subscribe((data) => {
        this.billing = data.cookies;
        console.log('billing', this.billing);
      });

    //
    (function ($) {
      $(document).ready(function () {
        console.log('Hello from jQuery!');
      });
    })(jQuery);
  }
}
