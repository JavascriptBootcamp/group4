import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

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
  expandAll(arr : HTMLInputElement[]){
    this.expAll = !this.expAll;
    if(!this.expAll){
      this.btnText = "Expand All";
    }else{
      this.btnText = "Collapse All";
    }
  }
  toggleAll(el : HTMLInputElement[]){
    if(this.btnText === "Expand All")
    {
      el.forEach((element) =>{
        element.collapse = true;
      })
    }
    else{
      el.forEach((element) =>{
        element.collapse = false;
      })
    }
  }
}
