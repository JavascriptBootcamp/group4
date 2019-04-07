import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals : string[];
  typeOfAnimals : string;
  numAnimal : number;

  constructor()
  {
    this.animals = ['dog','cat','lion'];
    this.typeOfAnimals = typeof this.animals;
    this.numAnimal = 214;
    this.numAnimal += 300;
  }
}