import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BmiCalcService {

  constructor() { }

  //BMI = weight (kg) /height (meters)2
  public calculateBmi(weight: number, height: number): number {
    return Number(weight)/ Math.pow(Number(height),2);
  }
}
