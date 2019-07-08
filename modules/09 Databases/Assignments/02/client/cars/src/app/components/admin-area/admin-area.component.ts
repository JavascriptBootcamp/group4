import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {
  @ViewChild('license') license: ElementRef;
  @ViewChild('license2') license2: ElementRef;
  @ViewChild('manufacturer') manufacturer: ElementRef;
  @ViewChild('model') model: ElementRef;
  @ViewChild('year') year: ElementRef;
  @ViewChild('km') km: ElementRef;
  @ViewChild('price') price: ElementRef;
  msg1: string;
  msg2: string;
  constructor() {
    this.msg1 = "";
    this.msg2 = "";
  }

  ngOnInit() {
  }
  async updateCar(e: Event) {
    e.preventDefault();
    const license = this.license.nativeElement.value;
    const manufacturer = this.manufacturer.nativeElement.value;
    const model = this.model.nativeElement.value;
    const year = this.year.nativeElement.value.split('-')[0];
    const km = this.km.nativeElement.value;
    const price = this.price.nativeElement.value;
    const obj = { license, manufacturer, model, year, km, price };
    const res = await fetch('http://localhost:8000/car', {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    this.msg1 = data.message;
  }

  async deleteCar(e: Event) {
    e.preventDefault();
    const license = this.license2.nativeElement.value;
    const res = await fetch('http://localhost:8000/car', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license })
    });
    const data = await res.json();
    this.msg2 = data.message;
  }
}
