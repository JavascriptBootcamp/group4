import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-models-and-prices-by-model',
  templateUrl: './models-and-prices-by-model.component.html',
  styleUrls: ['./models-and-prices-by-model.component.css']
})
export class ModelsAndPricesByModelComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }

  ngOnInit() {}


  async onSubmitForm(form: NgForm) {
    const model = form.value.model;

    let res = await fetch('http://localhost:5000/carModelsAndPricesByModel?model='+model);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);
  }

}
