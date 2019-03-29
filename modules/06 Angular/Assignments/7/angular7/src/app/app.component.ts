import { Component } from '@angular/core';
interface Person {
  name: string;
  bloodPressure: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7';
  persons: Person[];
  
  constructor() {
    this.persons = [{ name: "moshe", bloodPressure: 100 }, { name: "guy", bloodPressure: 180 }];
  }

}
