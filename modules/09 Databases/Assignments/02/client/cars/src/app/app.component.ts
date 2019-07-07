import { Component, ViewChild, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: string[];
  ngOnInit(): void {
    console.log("this.carSearchBy:", this.carSearchBy);
    console.log("this.carsSearchBy:", this.carsSearchBy);

    // this.input1Text = this.carSearchBy ? `Please insert ${this.carSearchBy.nativeElement.value}` : '';
    // this.input2Text = this.carSearchBy ? `Please insert ${this.carSearchBy.nativeElement.value}` : '';
  }

  @ViewChild('carSearchBy') carSearchBy;
  @ViewChild('carsSearchBy') carsSearchBy;
  @ViewChild('carI1') carI1;
  @ViewChild('carI2') carI2;
  @ViewChild('carsI1') carsI1;
  @ViewChild('carsI2') carsI2;

  @ViewChild('ln') ln;
  @ViewChild('company') company;
  @ViewChild('model') model;
  @ViewChild('year') year;
  @ViewChild('km') km;
  @ViewChild('price') price;

  title = 'cars';
  action: string;
  input1TextGet: string;
  input2TextGet: string;

  input1Text: string;
  input2Text: string;
  input3Text: string;
  input4Text: string;
  input5Text: string;
  input6Text: string;
  // carSearchBy : string;
  // carsSearchBy : string

  constructor(private carsService: CarsService) {
    this.data = [];
    this.action = "";
    this.carSearchBy = "";
    this.carsSearchBy = "";

    this.input1TextGet = "License number";
    this.input2TextGet = "License number";

    this.input1Text = "License number";
    this.input2Text = "Manufacturer";
    this.input3Text = "Model";
    this.input4Text = "Year";
    this.input5Text = "KM";
    this.input6Text = "Price";
    // { carsSearchBy:  }"All","License","Licenses","Years","Company","Model"
  }

  async onSubmit(e: Event, form, action: string, postInputs: HTMLElement[]) {
    e.preventDefault();
    let isQueryForOneCar: boolean;
    let input, input1, input2, searchBy,data;
    if (action !== "addCar") {
      if(this.carsSearchBy && this.carsSearchBy.nativeElement.value === "all"){
        data = this.carsService.getData({searchBy:"all"});
        this.getJsonData(data);
        return;
      }
      isQueryForOneCar = !( this.carsI1 || this.carsI2 );

      input1 = isQueryForOneCar ? this.carI1.nativeElement.value : (this.carsI1 ? this.carsI1.nativeElement.value : this.carsI1);
      input2 = isQueryForOneCar ? (this.carI2 ? this.carI2.nativeElement.value : this.carI2) : (this.carsI2 ? this.carsI2.nativeElement.value : this.carsI2);
      searchBy = isQueryForOneCar ? this.carSearchBy.nativeElement.value : this.carsSearchBy.nativeElement.value;
      input = { action, searchBy, isQueryForOneCar, input1, input2 };
      data = this.carsService.getData(input);
      this.getJsonData(data);
    }
    else {
      const licenseNumber = this.ln.nativeElement.value;
      const manufacturer = this.company.nativeElement.value;
      const model = this.model.nativeElement.value;
      const year = this.year.nativeElement.value;
      const km = this.km.nativeElement.value;
      const price = this.price.nativeElement.value;

      const body = {licenseNumber, manufacturer, model, year, km, price};
      data = this.carsService.getData({action:"addCar",body});
      this.getJsonData(data);
      return;
    }
  }

  setAction(action: string) {
    // this.action = action;
    console.log(action);
  }

  getJsonData(data){
    console.log(data);
    data.then(stream=>stream.text().then(data=>this.data = JSON.parse(data)));
  }

  setSearchBy(carSearchBy: string) {
    let input1 = "";
    let input2 = "";
    switch (carSearchBy) {
      case "license":
        input1 = "license number";
        break;
      case "two licenses":
        input1 = "First license number";
        input2 = "Second license number";
        break;
      case "model":
        input1 = "model";
        break;
      case "company":
        input1 = "manufacturer";
        break;
      case "year range":
        input1 = "From year";
        input2 = "To Year";
        break;
    }
    this.input1TextGet = `${input1}`;
    this.input2TextGet = `${input2}`;
  }
}

