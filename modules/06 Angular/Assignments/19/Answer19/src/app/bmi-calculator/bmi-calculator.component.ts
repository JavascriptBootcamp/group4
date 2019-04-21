import { Component, OnInit } from '@angular/core';
import BmiCalculatorService from "../bmi-calculator.service";
@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  errorMessage : string;
  isErrorOccured : boolean;
  resultMessage : string;


  checkInputs(event : Event , heightInput : number, weightInput : number) : void
  {
    event.preventDefault();

    if(heightInput > 0 && weightInput > 0)
    {
      this.isErrorOccured = false;
      this.resultMessage = this.bmiCalc.calcBmi(heightInput, weightInput);
    }
    else
    {
      this.isErrorOccured = true;
    }
  }

  constructor(private bmiCalc : BmiCalculatorService) {
    this.errorMessage = "שגיאה , אנא הכנס ערכים כראוי";
    this.isErrorOccured =  false;
  }

  ngOnInit() {
  }

}
