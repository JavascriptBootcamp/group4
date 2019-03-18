import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bool: boolean;
  num: number;
  str: string;
  names: object;
  res: string;
  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
  }
  ngOnInit() {
    this.res = `${typeof this.bool} ${typeof this.num} ${typeof this.str} ${typeof this.names}`;
  }
}
