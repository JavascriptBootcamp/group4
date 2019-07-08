import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { car } from 'src/app/models/car.model';

@Component({
  selector: 'app-display-car-expensive',
  templateUrl: './display-car-expensive.component.html',
  styleUrls: ['./display-car-expensive.component.css']
})
export class DisplayCarExpensiveComponent implements OnInit {
  @ViewChild('licenseOne') licenseOne: ElementRef;
  @ViewChild('licenseTwo') licenseTwo: ElementRef;
  car : car;
  constructor() {
    this.car = null;
   }

  ngOnInit() {
  }
  async display(e: Event) {
    e.preventDefault();
    const licenseOne = this.licenseOne.nativeElement.value;
    const licenseTwo = this.licenseTwo.nativeElement.value;
    if (!licenseOne || !licenseTwo) return;
    let res = await fetch('http://localhost:8000/car?licenseOne='+licenseOne + '&licenseTwo=' + licenseTwo)
    const data = await res.json();
    this.car = data.message;
  }

}
