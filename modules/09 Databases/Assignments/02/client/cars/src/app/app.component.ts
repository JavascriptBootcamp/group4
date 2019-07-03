import { Component, ViewChild } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('carSearchBy') carSearchBy;
  @ViewChild('carsSearchBy') carsSearchBy;
  @ViewChild('carI1') carI1;
  @ViewChild('carI2') carI2;
  @ViewChild('carsI1') carsI1;
  @ViewChild('carsI2') carsI2;


  title = 'cars';
  action: string;
  // carSearchBy : string;
  // carsSearchBy : string

  constructor(private carsService: CarsService) {
    this.action = "";
    this.carSearchBy = "";
    this.carsSearchBy = "";
  }

  onSubmit(e: Event, form, action: string, postInputs: HTMLElement[]) {
    e.preventDefault();
    console.log("postInputs:", postInputs);
    let isQueryForOneCar: boolean;
    let input, input1, input2, searchBy;
    if (action !== "Add") {
      isQueryForOneCar = this.carI1.nativeElement.value || this.carI2.nativeElement.value;
      input1 = isQueryForOneCar ? this.carI1.nativeElement.value : this.carsI1.nativeElement.value;
      input2 = isQueryForOneCar ? this.carI2.nativeElement.value : this.carsI2.nativeElement.value;
      searchBy = isQueryForOneCar ? this.carSearchBy.nativeElement.value : this.carsSearchBy.nativeElement.value;
      input = { action, searchBy, isQueryForOneCar, input1, input2 };
    }
    else{
      input1 = postInputs;
      input = { action, input1 };
    }

    this.carsService.getData(input);
    // console.log(e,form, action,`carSearchBy:${carSearchBy}`,carsSearchBy,carI1,carI2,carsI1,carsI2);

  }



setAction(action: string){
  // this.action = action;
  console.log(action);
}

setCarSearchBy(carSearchBy: string){
  // this.carSearchBy = carSearchBy;
}

setCarsSearchBy(carsSearchBy: string){
  // this.carsSearchBy = carsSearchBy;
}
}
