import { Component } from '@angular/core';
import { CarService } from "./car.service";
import { NgForm } from '@angular/forms';

interface Car {
  license: string,
  manufacturer: string,
  model: string,
  year: number,
  km: number,
  price: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car: Car;
  massage:string;

  constructor(private carService: CarService) {
    this.car = { license: "", manufacturer: "", model: "", year: null, km: null, price: null };
    this.massage="";
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.car = { license: form.value.license, manufacturer: form.value.manufacturer, model: form.value.model, year: form.value.year, km: form.value.km, price: form.value.price };
    this.carService.newCar(this.car);
    form.reset();
  }
}
