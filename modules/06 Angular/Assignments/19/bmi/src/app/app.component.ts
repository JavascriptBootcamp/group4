import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmi';
  bmi: number;

  constructor(private calcBmi: CalcService) {
    this.bmi =null;
  }

  funcToService(e: Event, kg: number, height: number) {
    e.preventDefault();
    this.bmi = this.calcBmi.calc(kg,height);
  }

}
