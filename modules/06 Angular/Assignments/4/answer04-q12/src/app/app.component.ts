import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer04-q12';
  randomStr: string;
  evenStr: string;


  constructor() {
    this.randomStr = "1   222   333   444   fff  aaa";
    this.evenStr = this.evenWords(this.randomStr);
  }

  evenWords(str: string) {

    let myStr: string;
    myStr = str.replace(/\s\s+/g, ' '); //remove whitespaces. \s \s+ is a regex.
    let stringArray: string[];
    stringArray = myStr.split(" ");
    let evenString = "";

    for (let i: number = 1; i < stringArray.length; i += 2) {
      evenString += `${stringArray[i]} `;
    }

    return evenString;
  }
}