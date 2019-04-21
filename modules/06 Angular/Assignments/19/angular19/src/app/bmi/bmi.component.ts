import { Component } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  title: string;
  result: number = 0;
  constructor(private calc: CalcService) {
    this.title = "מחשבון BMI";
  }

  calcSum(e: Event, height: string, kg: string) {
    e.preventDefault();
    this.result = this.calc.sum(height, kg);
  }
}
