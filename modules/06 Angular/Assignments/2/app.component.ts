import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  animals: any;
  animalsArr: string[];
  bool: boolean;
  num:number;
  name:object;
  type:any;
  x:number;
  y:number;

  constructor(){
    this.animals= "dog";
    this.x=2;
    this.y=2;
  }
  
  ngOnInit() {
    
    this.animals = 214;
    this.type=typeof(this.animals);
    this.animals = this.animals + 300;
    this.animalsArr = ['dog', 'cat', 'lion'];
    this.bool = true;
    this.num = 2;
    this.name = {fname:"Evyatar",lname:"duek"};
    
    this.x = ++this.x;
    this.x = ++this.x;
    this.y = this.y++;
    this.y = this.y++;
    
  }

}
