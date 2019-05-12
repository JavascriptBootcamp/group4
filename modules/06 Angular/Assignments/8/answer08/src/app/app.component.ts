import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anagrams';
  firstStr : string;
  secondStr: string;
  anargram: boolean = false;
  isResultVisible: boolean = false;

  constructor() {
    this.firstStr = "";
    this.secondStr = "";
  }

  addNewStringsPair(firstString: string, secondString: string) {
    if (firstString && secondString) {
      this.firstStr = firstString;
      this.secondStr = secondString;
      this.isResultVisible = true;
    }
    else {
      console.log("NO USER INPUT");
    }
  }
}
