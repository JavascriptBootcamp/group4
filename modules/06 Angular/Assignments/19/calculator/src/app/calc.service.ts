import { Injectable } from '@angular/core';
import {Calc} from './calc.model'
@Injectable({
  providedIn: 'root'
})
export class CalcService implements Calc {

  constructor() { }

  public sum =(num1, num2):number => {

    num1 = +num1;
    num2 = +num2;
    return num1 + num2;
  }

  public subtraction=(num1, num2):number => {

    num1 = +num1;
    num2 = +num2;
    return num1 - num2;
  }

  public division=(num1, num2):number =>{
    
  num1 = +num1;
  num2 = +num2;
  return num1 / num2;
}

public pow=(num1, num2):number =>{
  
num1 = +num1;
num2 = +num2;
return num1**num2;
}

public bmi=(num1, num2):number =>{
  
num1 = +num1;
num2 = +num2;
return num2/num1**2;
}



}
