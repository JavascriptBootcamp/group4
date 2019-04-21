import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public calc (kg:number,height:number): number{
    kg=+kg;
    height=+height;
    return Math.round(kg/(height*height));
  }
}
