import { Component, OnInit } from '@angular/core';
import { BmiCalculatorService } from 'src/app/bmi-calculator.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {
  result;
  constructor(private bmiCalculatorService: BmiCalculatorService) { 
    this.result=0;
  }
  ngOnInit() {
  }
  calculate(event:Event,height:number,weight:number){
    event.preventDefault();
    this.result=this.bmiCalculatorService.checkBMI(height,weight);
  }
}
