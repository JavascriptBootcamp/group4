import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer4to12';
  str: string;

  constructor() {
    this.str = "a bb ccc dddd eeeee";
  }

  evenWords(str: string) {
    var substrArr: string[] = str.split(' '); // An array of each substring (a string which has a space between it and the other substrings in str)
    var substrPositionNum: number = 1;
    var output: string = '';
  
    substrArr.forEach(subStr => {
      if (substrPositionNum % 2 === 0) output += subStr + ' ';
      substrPositionNum++;
    });
    
    return output;
  }
}