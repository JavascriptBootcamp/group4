import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secArray: boolean[];
  buttonTxt: string;
  constructor() {
    this.secArray = [false, false, false, false, false, false, false, false];
    this.buttonTxt = "Expand All";
  }
  expandAll(e: Event) {
    e.preventDefault();
    if (this.buttonTxt === "Expand All") {
      this.secArray = [true, true, true, true, true, true, true, true];
      this.buttonTxt = "Collapse All";
    } else if (this.buttonTxt === "Collapse All") {
      this.secArray = [false, false, false, false, false, false, false, true];
      this.buttonTxt = "Expand All";
    }
  }
}

