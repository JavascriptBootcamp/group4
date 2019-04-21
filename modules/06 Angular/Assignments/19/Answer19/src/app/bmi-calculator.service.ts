import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class BmiCalculatorService {

  constructor() {
  }

  public calcBmi(height : number, weight : number) : string
  {
    return (weight / (height * height)).toFixed(2);
  }
}
