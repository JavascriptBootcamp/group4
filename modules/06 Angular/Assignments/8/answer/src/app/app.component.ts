import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str1:string;
  str2:string;
  str3:string;

  constructor() {
    this.str1 = "fairy tales";
    this.str2 = "rail safety";
    this.str3 = "RAIL! SAFETY!";
    
  }
}
