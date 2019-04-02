import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oneAnimal:string;
  typeOfAnimal:string;
  numAnimal:number;
  animals:string[];

  constructor()
  {
    this.oneAnimal='dog';
    this.typeOfAnimal=typeof this.oneAnimal;
    this.numAnimal=214;
    this.numAnimal+=300;
    this.animals=['dog', 'cat', 'lion'];
  }


}
