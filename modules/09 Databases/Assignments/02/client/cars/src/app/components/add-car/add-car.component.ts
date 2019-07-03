import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  resultMessage: string;
  constructor() {
    this.resultMessage = null;
  }


  ngOnInit() {}


  async onSubmitAddCarForm(addCarForm: NgForm) {
    const licenseNum = addCarForm.value.carLicenseNum;
    const manufacturer = addCarForm.value.carManufacturer;
    const model = addCarForm.value.carModel;
    const year = addCarForm.value.carProductionYear;
    const km = addCarForm.value.carMileage;
    const price = addCarForm.value.carPrice;

    const carData = { licenseNum, manufacturer, model, year, km, price };

    const res = await fetch('http://localhost:5000/addCar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carData)
    });

    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }

}
