import { Component, OnInit } from '@angular/core';
import { BmiCalculatorService } from '../services/bmi-calculator.service'

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: number;
  toggle: string;
  constructor(private bmiCalculatorService: BmiCalculatorService) {
    this.toggle = "hidden";
  }

  ngOnInit() {
  }

  calc(e: Event, num1: number, num2: number) {
    e.preventDefault();
    this.result = this.bmiCalculatorService.sum(num1, num2);
    this.toggle = "visible";
  }
}
