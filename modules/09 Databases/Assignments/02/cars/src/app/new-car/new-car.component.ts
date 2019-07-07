import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from "../car.service";

interface Car {
  license: string,
  manufacturer: string,
  model: string,
  year: number,
  km: number,
  price: number
}

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

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
