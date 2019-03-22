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
  resultContent: string;

  constructor() {
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
  }
  ngOnInit() {
    this.resultContent = `Type of ${this.bool} is ${typeof this.bool},
                          type of ${this.num} is ${typeof this.num},
                          type of ${this.str} is ${typeof this.str},
                          type of ${this.names} is ${typeof this.names}`;
  }
}
