import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular4-a1';
  str: string;
  constructor() {
    this.str = "aaa bbbb asda 1331 ewe";
  }

  evenWords() {
    const strArr = this.str.split(' ');
    let strAns = "";
    for (let i = 1; i <= strArr.length; i++) {
      if (i % 2 === 0) {
        strAns += strArr[i - 1] + " ";
      }
    }
    return strAns;
  }
}
