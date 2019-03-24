import { Component } from '@angular/core';

interface Person {
  name: string,
  bloodPressure: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[];
  person1: Person;
  person2: Person;
  constructor() {
    this.person1 = {
      name: "joe",
      bloodPressure: 80
    }
    this.person2 = {
      name: "jimmy",
      bloodPressure: 122
    }
    this.people = [this.person1, this.person2]
  }
}
