import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'angular2-a2';
  bool: boolean;
  num: number;
  str: string;
  names: object;

  typeBool: string;
  typeNum: string;
  typeStr: string;
  typeNames: string;

  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
  }
  ngOnInit() {
    this.typeBool = typeof this.bool;
    this.typeNum = typeof this.num;
    this.typeStr = typeof this.str;
    this.typeNames = typeof this.names;
  }

}
