import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str: string;
  constructor() {
    this.str = this.evenWords('aaa bbbb asda 1331 ewe');;
  }

  evenWords(st: string): string {
    let strArr: string [] = st.split(' ');
    let strAns: string = "";
    for (let i = 1; i <= strArr.length; ++i) {
      if (i % 2 == 0) {
        strAns += strArr[i - 1] + " ";
      }
    }
    return strAns;
  }
}

