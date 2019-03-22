import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  strInput: string;
  strAns: string;
  strArr: string[];

  constructor() {
    this.strInput = "aaa bbbb asda 1331 ewe";
    this.strAns = "";
    this.strArr = [];
  }

  ngOnInit() {
    this.strAns = this.evenWords(this.strInput);
  }
  
  evenWords(str:string): string {
    this.strArr = str.split(' ');
    for (let i = 1; i <= this.strArr.length; ++i) {
      if (i % 2 === 0) {
        this.strAns += this.strArr[i - 1] + " ";
      }
    }
    return this.strAns;
  }
}

