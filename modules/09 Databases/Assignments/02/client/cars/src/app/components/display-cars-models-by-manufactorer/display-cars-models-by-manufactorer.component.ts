import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-cars-models-by-manufactorer',
  templateUrl: './display-cars-models-by-manufactorer.component.html',
  styleUrls: ['./display-cars-models-by-manufactorer.component.css']
})
export class DisplayCarsModelsByManufactorerComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }

  ngOnInit() {}


  async onSubmitManufactorerForm(manufactorerForm: NgForm) {
    const manufactorer = manufactorerForm.value.manufactorer;

    let res = await fetch('http://localhost:5000/carModelsByManufactorer?manufacturer='+manufactorer);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);
  }

}
