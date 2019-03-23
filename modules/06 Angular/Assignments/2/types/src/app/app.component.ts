import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bool:boolean = true ;
  num:number ;
  str:string ;
  names:object = {};

  constructor(){
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
  }

  types(){
    return`bool type is ${typeof this.bool},
     num type is ${typeof this.num} ,
     str type is ${typeof this.str} ,
     names type is ${typeof this.names} .`
  }
}
