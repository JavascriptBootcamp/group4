import { Component } from '@angular/core';

interface Person {
  name: string,
  bloodPressures: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNoraml: boolean;
  persons: Person[];
  constructor() {
    this.isNoraml = false;
    this.persons = [{ name: "Moshe", bloodPressures: 95 },
    { name: "Eli", bloodPressures: 145 },
    { name: "Aviv", bloodPressures: 75 }]
  }
}
