import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface MenuResponse {
  design: string;
}

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  title = 'Menu';
  private apiUrl = '';
  data: any = {};

  constructor(private http: HttpClient) {
    this.getData();
    this.getMenu();
  }

  getData() {
    return this.http.get<MenuResponse>(this.apiUrl);
  }
  getMenu() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    // this.http.get<MenuResponse>('http://151.80.44.110:2974/special/resource/article').subscribe(
    //   data => {
    //           console.log('Name menu: ' + data[0].design);
    // },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof  Error) {
    //       console.log('Client-side Error occured');
    //     } else {
    //       console.log('Server-side Error occured');
    //     }
    //   });
  }

}
