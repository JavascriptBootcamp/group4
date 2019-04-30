import { Component } from '@angular/core';
import { BmiCalculatorService } from './bmi-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer19';

  resultOfBMI: number;

  constructor(private objOfBmiCakculatorService: BmiCalculatorService) { 
    this.resultOfBMI = null;
  }

  getBMI(e: Event, weight: number, height: number) {
    e.preventDefault();

    if(weight === undefined || height === undefined) return  this.resultOfBMI = -1;
    this.resultOfBMI = this.objOfBmiCakculatorService.getBMI(weight, height);
  }
}
