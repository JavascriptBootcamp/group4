import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input: string;
  answer: string;
  constructor() {
    this.input = 'aaa bbbb  ';
  }
  ngOnInit() {
    this.answer = this.evenWords(this.input);
  }
  evenWords(str) : string {
    let strArr: string[] = str.split(' ');
    let strAns :string = "";
    for (let i = 1; i <= strArr.length; ++i) {

      if (i % 2 == 0) {
        strAns += strArr[i - 1] + " ";
      }

    }
    return strAns;
  }
}
