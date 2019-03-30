import { Component } from '@angular/core';

interface Name {
  first: string,
  last: string
}

interface Person {
  name: Name,
  bloodPressure: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer7';

  bloodPressure: number;
  isNormal: boolean;
  people: Person[];


  constructor() {
    this.bloodPressure = 70;
    this.isNormal = false;

    let DavidLev: Person = {
      name: {
        first: 'David',
        last: 'Lev'
      },
      bloodPressure: 100
    }

    let MosheCohen: Person = {
      name: {
        first: 'Moshe',
        last: 'Cohen'
      },
      bloodPressure: 79
    }

    this.people = [DavidLev, MosheCohen];
  }

}
