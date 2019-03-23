import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animals: string;
  animalsType: string
  animals2: number;
  animals3: number;
  animalsArr: string [];
  constructor() {
    this.animals = 'dog';
    this.animals2 = 214;
    this.animalsArr = ['dog', 'cat', 'lion'];

  }
  ngOnInit() {
    this.animalsType = typeof this.animals;
    this.animals3 = this.animals2 + 300;
  }
}
