import { Component, DoCheck } from '@angular/core';
import { CalcService } from '../calc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements DoCheck {
  result: string;
  sign: string;

  constructor(
    private calcService: CalcService,
    private activeRoute: ActivatedRoute
  ) {
    this.result = null;
    this.sign = "+";
  }

  ngDoCheck() {
    console.log("ngDoCheck");
    this.setSign();
  }

  calc(e: Event, num1: number, num2: number) {
    e.preventDefault();
    switch (this.activeRoute.snapshot.params.action) {
      case 'חיבור':
        this.result = "" + this.calcService.sum({ num1, num2 });
        break;
      case 'חיסור':
        this.result = "" + this.calcService.sub({ num1, num2 });
        break;
      case 'כפל':
        this.result = "" + this.calcService.mul({ num1, num2 });
        break;
      case 'חילוק':
        this.result = "" + this.calcService.div({ num1, num2 });
        break;
      default:
        this.result = "שגיאה: פעולה לא מוכרת";

    }
  }

  setSign() {
    switch (this.activeRoute.snapshot.params.action) {
      case 'חיבור':
        this.sign = "+";
        break;
      case 'חיסור':
        this.sign = "-";
        break;
      case 'כפל':
        this.sign = "X";
        break;
      case 'חילוק':
        this.sign = "/";
        break;
    }
  }


}
