import { Component, OnInit,Input } from '@angular/core';
import {Subject} from '../subject.module'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() subject:Subject;
  @Input() expandAll:boolean;
  expand:boolean;

  constructor() {

    this.expandAll = false;
    this.expand = false;
   }


   subjectClicked(e){
    e.preventDefault();
    this.expand = !this.expand;
   }


   isExpand(){

     if(this.expand || this.expandAll){
       return "content content-show";
     }
     if(!this.expandAll || !this.expand){
      return "content content-hide";
     }
   }
 

  ngOnInit() {


  }

}
