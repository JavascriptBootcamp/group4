import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // calc: CalcService;
  // constructor(calc: CalcService){
  //   this.calc = calc;
  // }
  result: number;

  constructor(private calc: CalcService){
    this.result = 0;
  }

  ngOnInit() {
    console.log(this.calc.sum(1,2));
    console.log(this.calc.sum(3,2));
    console.log(this.calc.sum(10,2));
  }

  calcSum(e: Event, num1: number, num2: number) {
    e.preventDefault();
    this.result = this.calc.sum(num1, num2)
  }
}
