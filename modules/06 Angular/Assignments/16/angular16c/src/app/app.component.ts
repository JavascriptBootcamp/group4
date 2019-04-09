import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string;
  expAll: boolean;
  btnText : string;
  constructor() {
    this.display = "";
    this.expAll = false;
    this.btnText = "Expand All";
  }
  expandAll(){
    this.expAll = !this.expAll;
    if(!this.expAll){
      this.btnText = "Expand All";
    }else{
      this.btnText = "Collapse All";
    }
  }
}
