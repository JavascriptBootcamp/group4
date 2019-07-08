import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { car } from 'src/app/models/car.model';

@Component({
  selector: 'app-display-car-range',
  templateUrl: './display-car-range.component.html',
  styleUrls: ['./display-car-range.component.css']
})
export class DisplayCarRangeComponent implements OnInit {
  @ViewChild('yearStart') yearStart: ElementRef;
  @ViewChild('yearEnd') yearEnd: ElementRef;
  cars: car[];
  constructor() {
    this.cars = null;
  }

  ngOnInit() {
  }
  async display(e: Event) {
    e.preventDefault();
    const yearStart = this.yearStart.nativeElement.value;
    const yearEnd = this.yearEnd.nativeElement.value;
    if (!yearStart || !yearEnd) return;
    let res = await fetch('http://localhost:8000/cars?yearStart=' + yearStart + '&yearEnd=' + yearEnd)
    const data = await res.json();
    this.cars = data.message;
  }
}
