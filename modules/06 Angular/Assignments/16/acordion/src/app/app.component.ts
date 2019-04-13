import { Component } from '@angular/core';
import {Subject} from './subject.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subjectsArr: Subject[]
  expand:boolean;


  constructor(){
    this.subjectsArr = [

      {
        title:"Enter keywords or item number",
        id:"0"
      },
      {
        title:"Search including",
        id:"1"
      },
      {
        title:"Price",
        id:"2"
      },
      {
        title:"Buying formats",
        id:"3"
      },
      {
        title:"Condition",
        id:"4"
      },
      {
        title:"Show results",
        id:"5"
      }, {
        title:"Location",
        id:"6"
      },
      {
        title:"Sellers",
        id:"7"
      },
      {
        title:"Sort by",
        id:"8"
      },
    ];


    this.expand = false;

  }



  ExpandAll(e){
    e.preventDefault();
    if(e.target.innerText === "Expand All"){
      this.expand = true;
      e.target.innerText = "Close All";
    }
    else  if(e.target.innerText === "Close All"){
      this.expand = false;
      e.target.innerText = "Expand All";
    }
  }
}
