import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'myAnswer202';
  bool: boolean;
  num: number;
  str: string;
  names: object;
  
  typeOfBool: string;
  typeOfNum: string;
  typeOfStr: string;
  typeOfNames: string;
  
  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
  }

  ngOnInit(): void {
    this.typeOfBool=typeof this.bool;
    this.typeOfNum=typeof this.num;
    this.typeOfStr=typeof this.str;
    this.typeOfNames=typeof this.names;
  }
}
