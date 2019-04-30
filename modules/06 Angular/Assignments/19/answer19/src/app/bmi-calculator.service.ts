import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

  // weight (kg), height (meters)
  getBMI(weight: number, height: number) {
    let bmi = Math.ceil(weight/ Math.pow(height, 2));
    return bmi;
  }
}