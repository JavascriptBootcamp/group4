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
  types: any[];

  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
    this.types = [];
  }

  ngOnInit() {
    this.types.push(typeof this.bool);
    this.types.push(typeof this.num);
    this.types.push(typeof this.str);
    this.types.push(typeof this.names);
  }
}
