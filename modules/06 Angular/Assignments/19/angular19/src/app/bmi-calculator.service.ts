import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

calculateBMI(heigh,wieght){
  let h=+heigh;
  let w=+wieght;

  return Math.round(w/(h*h));



}





}
