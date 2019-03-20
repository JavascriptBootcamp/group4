import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //group4/Modules/01 JavaScript Programming/Assignments/1
  animals:any;
  
  //group4/Modules/01 JavaScript Programming/Assignments/2
  bool:boolean;
  num:number;
  str:string;
  names:any;

  //group4/Modules/01 JavaScript Programming/Assignments/4
  x:number;
  y:number;

  //All
  displyArr:any[];

  constructor(){
    //group4/Modules/01 JavaScript Programming/Assignments/1
    this.animals = null;

    //group4/Modules/01 JavaScript Programming/Assignments/2
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};

    //group4/Modules/01 JavaScript Programming/Assignments/4
    this.x = 10;
    this.y = 20;


    //All
    this.displyArr = [];

  }
  ngOnInit(){
    //group4/Modules/01 JavaScript Programming/Assignments/1
    this.displyArr.push("group4/Modules/01 JavaScript Programming/Assignments/1")
    this.animals = "dog";
    this.displyArr.push(this.animals);
    this.animals = typeof this.animals;
    this.displyArr.push(this.animals);
    this.animals = 214;
    this.displyArr.push(this.animals);
    this.animals += 300;
    this.displyArr.push(this.animals);
    this.animals = ['dog', 'cat', 'lion'][1];
    this.displyArr.push(this.animals);

    //group4/Modules/01 JavaScript Programming/Assignments/2
    this.displyArr.push("group4/Modules/01 JavaScript Programming/Assignments/2")
    this.displyArr.push(typeof this.bool);
    this.displyArr.push(typeof this.num);
    this.displyArr.push(typeof this.str);
    this.displyArr.push(typeof this.names);

    //group4/Modules/01 JavaScript Programming/Assignments/4
    this.displyArr.push("group4/Modules/01 JavaScript Programming/Assignments/4")
    this.x = ++this.x;
    this.x = ++this.x;
    this.y = this.y++;
    this.y = this.y++;
    this.displyArr.push(this.x);
    this.displyArr.push(this.y);
  }
  
 

}
