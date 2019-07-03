import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-cars-by-years',
  templateUrl: './display-cars-by-years.component.html',
  styleUrls: ['./display-cars-by-years.component.css']
})
export class DisplayCarsByYearsComponent  {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }


  async onSubmitYearsRangeForm(yearsRangeForm: NgForm) {
    const startYear = yearsRangeForm.value.startYear;
    const endYear = yearsRangeForm.value.endYear;

    let res = await fetch('http://localhost:5000/carsByYearsRange?fromYear='+startYear+'&toYear='+endYear);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);
  }

}
