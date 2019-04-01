import { Component } from '@angular/core';
interface Person {
  name: string;
  bloodPressure: number;
  // isNormal(): boolean;
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
      bloodPressure: 70
    }, {
      name: 'Diana',
      bloodPressure: 110
    }, {
      name: 'Georgia',
      bloodPressure: 170
    }];
  }
} 
