import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer621';
  animal:string ;
  num:number; 
  animals:string[];
  typeofAnimals:string;
  constructor(){

    this.num = 214;

  }
  ngOnInit() {
    this.animal = "dog";
    this.typeofAnimals=typeof this.animal;
    this.num = this.num + 300;
    this.animals = ['dog', 'cat', 'lion']; //"animals array"
    console.error(this.animals[1]);
  }
}
