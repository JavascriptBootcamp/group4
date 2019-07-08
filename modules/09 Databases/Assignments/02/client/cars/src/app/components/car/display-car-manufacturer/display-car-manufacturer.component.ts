import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { car } from 'src/app/models/car.model';

@Component({
  selector: 'app-display-car-manufacturer',
  templateUrl: './display-car-manufacturer.component.html',
  styleUrls: ['./display-car-manufacturer.component.css']
})
export class DisplayCarManufacturerComponent implements OnInit {

  @ViewChild('manufacturer') manufacturer: ElementRef;
  cars : car[];
  constructor() {
    this.cars = null;
   }

  ngOnInit() {
  }
  async display(e: Event) {
    e.preventDefault();
    const manufacturer = this.manufacturer.nativeElement.value;
    if (!manufacturer) return;
    let res = await fetch('http://localhost:8000/cars?manufacturer='+manufacturer)
    const data = await res.json();
    this.cars = data.message;
  }
}
