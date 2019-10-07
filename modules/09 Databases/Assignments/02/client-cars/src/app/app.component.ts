import { Component } from "@angular/core";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client-cars";
  carNumber = "12-345-11";
  carNumber2 = "12-345-12";
  year = 2012;
  manufacturer = "mazda";
  model = "focus";

  car = {
    licenseNumber: "12-345-90",
    manufacturer: "mazda",
    model: "3",
    year: 2016,
    km: 1700,
    price: 9000
  };
  addCar() {
    fetch("http://localhost:5000/car", {
      method: "post",
      body: JSON.stringify(this.car),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(status => console.log(status));
  }
  display1() {
    fetch(`http://localhost:5000/car/${this.carNumber}`)
      .then(res => res.json())
      .then(carDetiel => console.log(carDetiel));
  }
  display2() {
    fetch(`http://localhost:5000/cars/year?startYear=2000&endYear=2014`)
      .then(res => res.json())
      .then(carDetiel => console.log(carDetiel));
  }
  display3() {
    fetch(`http://localhost:5000/cars/manufacturers/${this.manufacturer}`)
      .then(res => res.json())
      .then(carDetiel => console.log(carDetiel));
  }
  display4() {
    fetch(`http://localhost:5000/cars/models/${this.model}`)
      .then(res => res.json())
      .then(carDetiel => console.log(carDetiel));
  }

  displayExpensive() {
    fetch(
      `http://localhost:5000/cars/expensive?license1=${
        this.carNumber
      }&license2=${this.carNumber2}`
    )
      .then(res => res.json())
      .then(expensiveCar => console.log(expensiveCar));
  }
}
