import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebay';
  toggle:boolean;
  valueBtn:string;
  constructor(){
    this.toggle=false;
    this.valueBtn="Expand All";
  }
  

  changeAll(){
    this.toggle=!this.toggle;
    if(this.toggle)
    this.valueBtn="Collapse";
    else
    this.valueBtn="Expand All";
}
}
