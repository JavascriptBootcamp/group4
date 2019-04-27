import { Component } from '@angular/core';
import { BmiCalculatorService  } from './bmi-calculator.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19';
    result:string;
    constructor(private bmiService : BmiCalculatorService ){}


    calc(e,heigh,wieght){
      e.preventDefault(); 
    this.result=" התוצאה היא"+"    "+" "+this.bmiService.calculateBMI(heigh,wieght);
    }


}
