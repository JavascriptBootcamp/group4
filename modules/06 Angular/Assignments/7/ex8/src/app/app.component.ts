import { Component } from '@angular/core';
interface Person {
  name: string;
  bloodPressure: number;
  isNormal(): boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[];
  constructor() {
    this.people = [{
      name: 'John',
      bloodPressure: 70,
      isNormal: () => {
        return this.people[0].bloodPressure >= 80 && this.people[0].bloodPressure <= 120;
      }
    }, {
      name: 'Diana',
      bloodPressure: 110,
      isNormal: () => {
        return this.people[1].bloodPressure >= 80 && this.people[1].bloodPressure <= 120;
      }
    }, {
      name: 'Georgia',
      bloodPressure: 170,
      isNormal: () => {
        return this.people[2].bloodPressure >= 80 && this.people[2].bloodPressure <= 120;
      }
    }];
  }
} 
