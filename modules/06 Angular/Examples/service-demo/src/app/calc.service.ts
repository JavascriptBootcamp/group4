import { Injectable } from '@angular/core';
import CalcModel from './calc.model';
import PairModel from './pair.model';

@Injectable({
  providedIn: 'root'
})
export class CalcService implements CalcModel {

  constructor() { }

  public sum(pair: PairModel):number {
    // x = +x;
    // y = +y;

    // x = Number(x);
    // y = Number(y);

    pair.num1 = +pair.num1;
    pair.num2 = +pair.num2;

    return pair.num1 + pair.num2;
  }

  public sub(pair: PairModel):number {
    return +pair.num1 - +pair.num2;
  }

  public mul(pair: PairModel):number {
    return +pair.num1 * +pair.num2;
  }

  public div(pair: PairModel):number {
    return +pair.num1 / +pair.num2;
  }
}
