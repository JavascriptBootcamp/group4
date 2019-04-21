import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {
  result:number;
  constructor() {
    this.result=0;
  }
  checkBMI(height:number,weight:number){
    height = +height;
    weight = + weight;
    this.result= weight/(height*height);
    console.log(this.result);
    return this.result;
  }

}
