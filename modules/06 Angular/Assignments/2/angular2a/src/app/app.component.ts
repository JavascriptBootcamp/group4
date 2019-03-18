import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animals: string
  numberOfAnimals: number;
  animalsArr: string[];
  res: string;
  constructor() {
    this.animals = "dog";
    this.numberOfAnimals = 214;
    this.animalsArr = ['dog', 'cat', 'lion'];
  }
  ngOnInit() {
    this.res = typeof this.animals;
    this.numberOfAnimals += 300;
    console.error(this.animals[1]);
  }
}
