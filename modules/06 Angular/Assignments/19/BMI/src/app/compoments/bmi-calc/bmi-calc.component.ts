import { Component, OnInit } from '@angular/core';
import { BmiCalcService } from "../../services/bmi-calc.service";

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent implements OnInit {

  solution: number;

  constructor(private calc: BmiCalcService) { }

  ngOnInit() {
    this.solution = null;
  }

  calcBmi(e: Event, height: number, weight: number) {
    e.preventDefault();
    this.solution = this.calc.calculateBmi(weight,height);
  }

}
