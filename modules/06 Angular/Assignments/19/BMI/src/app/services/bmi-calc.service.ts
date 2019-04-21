import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BmiCalcService {

  constructor() { }

  //BMI = weight (kg) /height (meters)2
  public calculateBmi(weight: number, height: number): number {
    let res = Number(weight)/ Math.pow(Number(height),2);
    //check the input correctness
    if(isNaN(res) || Math.round(res) === 0 || Math.round(res) === 1){
      console.error(`problem with the bmi calculation, check your input - weight: '${weight}', height:'${height}'`);
      return 0;
    }

    return res;
  }
}
