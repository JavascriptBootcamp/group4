import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bool = true ;
   num = 2 ;
  str = "ofek";
   names = {};
   typeBool;
   typeNum;
   typeNames;
   typeStr;

    ngOnInit(){
      this.typeBool = typeof  this.bool;
      this.typeNum = typeof  this.num;
      this.typeStr =  typeof  this.str;
      this.typeNames = typeof  this.names ;
    
    }

 





}
