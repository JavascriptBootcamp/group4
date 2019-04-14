import { Component } from '@angular/core';
import { IPerson } from "../IPerson";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people : IPerson[];

  constructor()
  {
    this.people = [
      {
        name : "Guy",
        bloodPressure : 98,
      },
      {
        name : "Darth Vader",
        bloodPressure : 129,
      },
      {
        name : "Luke skywalker",
        bloodPressure : 40,
      },
      {
        name : "Qui-gon-jinn",
        bloodPressure : 190,
      },
    ]
  }
}