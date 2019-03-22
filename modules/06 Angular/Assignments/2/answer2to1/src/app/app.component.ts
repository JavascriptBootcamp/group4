import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer2';

  animals: string;
  animalsNum: number;
  animalsArr: string[];
  typeOfanimalsVar: string;

  constructor() {
    this.animals = 'dog';
    this.animalsNum = 214;
    this.animalsArr = ['dog', 'cat', 'lion'];
  }


  ngOnInit() {
    this.typeOfanimalsVar = typeof this.animals;
    this.animalsNum += 300;
    console.error(this.animalsArr[1]);
  }
}
