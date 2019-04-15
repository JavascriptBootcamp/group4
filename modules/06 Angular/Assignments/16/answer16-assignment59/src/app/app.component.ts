import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textOnButton:string;
  open:boolean;
  constructor(){
    this.textOnButton="Expand All";
  }
  expendAll(event){
    event.preventDefault();
    this.open=!this.open;
    if(this.textOnButton==="Expand All"){
      this.textOnButton="Collapse All";
    }
    else
      this.textOnButton="Expand All";
  }
}
