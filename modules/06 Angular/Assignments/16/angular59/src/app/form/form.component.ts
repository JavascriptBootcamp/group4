import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    arrayDivesCondition:boolean[];
    openDiv1v:boolean;
    expndandClose:string;
    collapseAll:boolean;

  constructor() {
    this.collapseAll=true;
    this.expndandClose="Expand All";
    this.arrayDivesCondition=[true,true,true,true,true,true,true,true,true,true];
    
   }

  ngOnInit() {
  }
  openDiv1(event){
  let index = event.target.id[3];   
 this.arrayDivesCondition[index]=!this.arrayDivesCondition[index ]; 
  }
  expandMini(event){
    event.preventDefault();
    if( this.expndandClose==="Collapse All"){
            this.expndandClose="Expand All";
           this.collapseAll=true;
    this.arrayDivesCondition=[false,false,false,false,false,false,false,false,false,true];

    }
    else  {this.expndandClose="Collapse All";
    this.collapseAll=false;
    this.arrayDivesCondition=[true,true,true,true,true,true,true,true,true,true];

  }


  }
 



}
