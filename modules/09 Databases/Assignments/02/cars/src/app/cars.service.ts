import { Injectable } from '@angular/core';


interface Icar{
  license:string,
  Manufacturer:string,
  Model:string,
  Year:string,
  KM:string,
  Price:string,

}

@Injectable({
  providedIn: 'root'
})


export class CarsService {
  url: string;
  constructor() {
    this.url = "http://localhost:5000/";
  }

  addCar(car:Icar){
    fetch(this.url + 'car',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(car)
    })
  }

  async getCarByLicense(license) {

    const response = await fetch(this.url + `car?license=${license}`);
    const data = response.json();
    return data;
  }

  async getCarsByYearRange(fromYear,untilYear) {
    const response = await fetch(this.url + `cars?fromYear=${fromYear}&untilYear=${untilYear}`);
    const data = response.json();
    return data;
  }

  async getCarsModelsByManufacturer(manufacturer) {
    const response = await fetch(this.url + `car/models?Manufacturer=${manufacturer}`);
    const data = response.json();
    return data;
  }

  async getModelsAndPricesByModel(model) {
    const response = await fetch(this.url + `cars/models/prices?Model=${model}`);
    const data = response.json();
    return data;
  }

  async getTheMoreExpensiveCar(firstLicense,secondLicense) {
    const response = await fetch(this.url + `car/${firstLicense}/${secondLicense}`);
    const data = response.json();
    return data;
  }




}
