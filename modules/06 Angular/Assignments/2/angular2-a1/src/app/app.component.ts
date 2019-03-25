import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular2-a1';
  animal: string;
  typeInfo: string;
  animals: string[];
  num: number;
  constructor() {
    this.animal = "dog";
    this.typeInfo = typeof this.animal;
    this.animals = ["dog", "cat", "lion"];
    this.num = 214 + 300;
  }
}
