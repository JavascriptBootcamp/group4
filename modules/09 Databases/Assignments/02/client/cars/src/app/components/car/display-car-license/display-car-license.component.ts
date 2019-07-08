import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {car} from '../../../models/car.model'

@Component({
  selector: 'app-display-car-license',
  templateUrl: './display-car-license.component.html',
  styleUrls: ['./display-car-license.component.css']
})
export class DisplayCarLicenseComponent implements OnInit {
  @ViewChild('license') license: ElementRef;
  car : car;
  constructor() {
    this.car = null;
   }

  ngOnInit() {
  }
  async display(e: Event) {
    e.preventDefault();
    const license = this.license.nativeElement.value;
    if (!license) return;
    let res = await fetch('http://localhost:8000/car?license='+license)
    const data = await res.json();
    this.car = data.message;
  }
}
