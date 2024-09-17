import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { car } from 'src/app/models/car.model';

@Component({
  selector: 'app-display-car-model',
  templateUrl: './display-car-model.component.html',
  styleUrls: ['./display-car-model.component.css']
})
export class DisplayCarModelComponent implements OnInit {

  @ViewChild('model') model: ElementRef;
  cars : car[];
  constructor() {
    this.cars = null;
   }

  ngOnInit() {
  }
  async display(e: Event) {
    e.preventDefault();
    const model = this.model.nativeElement.value;
    if (!model) return;
    let res = await fetch('http://localhost:8000/cars?model='+model)
    const data = await res.json();
    this.cars = data.message;
  }

}
