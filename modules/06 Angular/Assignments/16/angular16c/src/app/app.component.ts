import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string;
  isOpen: boolean[];
  btnText: string;
  constructor() {
    this.display = "";
    this.isOpen = [false,false,false,false,false,false,false,true,false,false];
    this.btnText = "Expand All";
  }
  toggleAll() {
    if (this.btnText === "Expand All") {
      this.isOpen = [true,true,true,true,true,true,true,true,true,true];
      this.btnText = "Collapse All";
    }
    else if (this.btnText === "Collapse All") {
      this.isOpen = [false,false,false,false,false,false,false,false,false,false];
      this.btnText = "Expand All";
    }
  }
}
