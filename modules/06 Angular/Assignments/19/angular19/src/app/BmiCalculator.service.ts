import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculator {

  constructor() { }

  public calc(weigth : number , height:number) : number{
    return weigth / (height*height);
  }
}
