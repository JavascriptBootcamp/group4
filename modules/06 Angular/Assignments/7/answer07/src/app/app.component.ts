import { Component } from '@angular/core';
import { Patient } from '../Patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'answer07';

  patients: Patient[];

  constructor() {
    this.patients = [
      new Patient('Mariya', 120),
      new Patient('John', 220),
      new Patient('Jorah', 20),
      new Patient('White Walker', 0),
      new Patient('Lanis', 85)
    ];
  }
}