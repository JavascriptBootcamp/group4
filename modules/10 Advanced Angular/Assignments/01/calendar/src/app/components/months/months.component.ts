import { Component } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent {
  monthName: string;
  constructor() {
    this.monthName = "";
  }
  showMonth(value: string) {
    this.monthName = value;
  }

}
