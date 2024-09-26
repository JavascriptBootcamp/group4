import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  message: string;


  constructor() {
    this.message = "";

  }

  newCar(car: object) {
    fetch('http://localhost:5000/car', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })

  }

  licenseSearch(license: string) {
    fetch('http://localhost:5000/car/' + license)
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data.message[0]));
      })
  }

  yearsSearch(from: string, until: string) {
    fetch(`http://localhost:5000/cars/${from}/${until}`)
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data.message));
      })
  }

  manufacturerSearch(manufacturer:string){
    fetch(`http://localhost:5000/cars/${manufacturer}`)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data.message));
    })
  }

  
  modelSearch(model:string){
    fetch(`http://localhost:5000/cars_model/${model}`)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data.message));
    })
  }

    
  expensiveCarSearch(license1:string,license2:string){
    fetch(`http://localhost:5000/cars_maxprice/${license1}/${license2}`)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data.message));
    })
  }
}
