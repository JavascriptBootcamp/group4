import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool : boolean;
  num : number;
  str : string;
  names : object;
  typeOfBool : string;
  typeOfNum : string;
  typeOfStr : string;
  typeOfNames : string;
  
  constructor()
  {
    this.bool = true;
    this.num = 2;
    this.str = "guy";
    this.names = {};
    this.typeOfBool = typeof this.bool;
    this.typeOfNum = typeof this.num;
    this.typeOfStr = typeof this.str;
    this.typeOfNames = typeof this.names;
  }
}