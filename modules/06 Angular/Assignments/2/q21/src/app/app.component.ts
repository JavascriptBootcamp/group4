import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'q21';

  animal: string;
  animals: string[];
  num: number;

  constructor(){
    this.animal = "dog";
    this.num = 214;
    this.num += 300;
    this.animals = ['dog', 'cat', 'lion']; //"animals array"

  }

  ngOnInit(){

  }
}
