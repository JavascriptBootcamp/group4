import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animals: any;
  animalsArr: any[];

  constructor() {
    this.animals = null;
    this.animalsArr = [];
  }

  ngOnInit() {
    this.animals = "dog";
    this.animalsArr.push(this.animals);
    this.animals = typeof this.animals;
    this.animalsArr.push(this.animals);
    this.animals = 214;
    this.animalsArr.push(this.animals);
    this.animals = this.animals + 300;
    this.animalsArr.push(this.animals);
    this.animals = ['dog', 'cat', 'lion'];
    this.animals = this.animals[1];
    this.animalsArr.push(this.animals);
  }
}
