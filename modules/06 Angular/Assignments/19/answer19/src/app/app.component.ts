import { Component } from '@angular/core';
import { BmiCalcService } from './bmi-Calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: number;
  constructor(private bmiC: BmiCalcService) {
    this.result = 0;
  }
  bmiSum(e: Event, height: number, weight: number)
  {
    e.preventDefault();

    this.result = this.bmiC.bmiSum(height, weight);

  }
}
