import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer1';
  animals:any;
  type: string = "";
  constructor(){

  }
  ngOnInit(){

    this.animals = "dog";
    this.type += ` ${typeof this.animals}`;

    this.animals=214;
    this.animals = this.animals + 300;
    this.animals = ['dog', 'cat', 'lion']; //"animals array"
    this.type += ` ${this.animals[1]}`;

  }
}
