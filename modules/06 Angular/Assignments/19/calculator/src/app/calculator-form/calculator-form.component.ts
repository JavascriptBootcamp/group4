import { Component, OnInit } from '@angular/core';
import {Calc} from '../calc.model'
import {CalcService} from '../calc.service'
@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  result:number;
  constructor(private calc:CalcService) { 
    this.result = 0;
  }

  ngOnInit() {
  }


  onSubmit(e,height,weight,selectedOpt){
     e.preventDefault();
     console.log(selectedOpt[selectedOpt.selectedIndex].value)
     switch(selectedOpt[selectedOpt.selectedIndex].value){
       case "1":this.result = this.calc.sum(height,weight);break;
       case "2":this.result = this.calc.subtraction(height,weight);break;
       case "3":this.result = this.calc.division(height,weight);break;
       case "4":this.result = this.calc.pow(height,weight);break;
       default:this.result = this.calc.bmi(height,weight);break;
     }
  
  }

}
