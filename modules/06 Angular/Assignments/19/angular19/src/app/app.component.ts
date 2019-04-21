import { Component } from '@angular/core';
import { BmiCalculator } from './BmiCalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: number;
  constructor(private bmi: BmiCalculator) { }
  calcBmi(e: Event, weight: number, height: number) {
    e.preventDefault();
    this.result = this.bmi.calc(weight , height);
  }
}
