import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('license') license: ElementRef;
  @ViewChild('manufacturer') manufacturer: ElementRef;
  @ViewChild('model') model: ElementRef;
  @ViewChild('year') year: ElementRef;
  @ViewChild('km') km: ElementRef;
  @ViewChild('price') price: ElementRef;
  msg: string;
  constructor() {
    this.msg = null;
  }

  ngOnInit() {
  }
  async addCar(e: Event) {
    e.preventDefault();
    const license = this.license.nativeElement.value;
    const manufacturer = this.manufacturer.nativeElement.value;
    const model = this.model.nativeElement.value;
    const year = this.year.nativeElement.value.split('-')[0];
    const km = this.km.nativeElement.value;
    const price = this.price.nativeElement.value;
    const obj = { license, manufacturer, model, year, km, price };
    if (!license || !manufacturer || !model || !year || !km || !price) return;
    let res = await fetch('http://localhost:8000/car', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
    const data = await res.json();
    setInterval(() => {
      this.msg = null;
    }, 1000)
    this.msg = data.message;
    this.cleanFields();
  }
  cleanFields() {
    this.license.nativeElement.value = this.manufacturer.nativeElement.value = this.model.nativeElement.value =
      this.year.nativeElement.value = this.km.nativeElement.value = this.price.nativeElement.value = "";
  }
}