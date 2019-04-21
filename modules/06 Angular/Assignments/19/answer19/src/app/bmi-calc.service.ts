import { Injectable } from '@angular/core';
// import BmiCalcModel from '/BmiCalc.model';

@Injectable({
  providedIn: 'root'
})
export class BmiCalcService {

  constructor() { }

  public bmiSum(h: number , w: number ): number {
    let res = 0;
    h = +h;
    w = +w;
    res = Math.ceil(w / Math.pow(h, 2));
    return res;

  }
}
