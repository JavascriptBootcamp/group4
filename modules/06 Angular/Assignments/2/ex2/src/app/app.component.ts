import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool: boolean;
  num: number;
  str: string;
  names: object;
  namesStr: string;
  boolType: string;
  numType: string;
  strType: string;
  namesType: string;
  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
    this.namesStr = JSON.stringify(this.names);
    this.boolType = typeof this.bool;
    this.numType = typeof this.num;
    this.strType = typeof this.str;
    this.namesType = typeof this.names;
  }
}
