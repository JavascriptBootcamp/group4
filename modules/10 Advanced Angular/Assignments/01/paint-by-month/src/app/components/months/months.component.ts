import { Component, OnInit, ViewChild } from '@angular/core';
import { MonthNumberToWordPipe } from '../../pipes/month-number-to-word.pipe';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})


export class MonthsComponent implements OnInit {
  @ViewChild('monthInput') monthInput;
  monthNumber: number;

  constructor() { }

  ngOnInit() {}


  getMonthNumber() {
    this.monthNumber = this.monthInput.nativeElement.value;
    return String(this.monthNumber);
  }

}
