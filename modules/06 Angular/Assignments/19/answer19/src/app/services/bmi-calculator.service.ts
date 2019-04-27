import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

  public sum(height: number, weight: number): number {
    return Math.round(+weight / (+height * +height));
  }
}