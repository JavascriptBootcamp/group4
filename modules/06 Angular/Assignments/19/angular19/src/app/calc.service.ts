import { Injectable } from '@angular/core';
import { PairModel } from "./pair.model";
@Injectable({
  providedIn: 'root'
})
export class CalcService {
  pair: PairModel;
  constructor() {
    this.pair = { height: 0, kg: 0 };
  }

  public sum(height: string, kg: string): number {
    this.pair.height = parseFloat(height);
    this.pair.kg = parseFloat(kg);
    if (isNaN(this.pair.height) || isNaN(this.pair.kg)) {
      alert("Must Be Number");
      return 0;
    }
    else {
      return Math.round(this.pair.kg / Math.pow(this.pair.height, 2));
    }
  }

}
