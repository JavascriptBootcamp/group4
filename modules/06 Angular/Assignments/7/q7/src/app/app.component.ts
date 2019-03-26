import { Component } from '@angular/core';

interface person{
  name: string;
  bloodPressure: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q7';
  people: person[];

  constructor(){
    this.people = [{name: "Dan", bloodPressure: 90},{name: "Yossi", bloodPressure: 160}];
  }
}