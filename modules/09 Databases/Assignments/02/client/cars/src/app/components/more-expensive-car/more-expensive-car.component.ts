import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-more-expensive-car',
  templateUrl: './more-expensive-car.component.html',
  styleUrls: ['./more-expensive-car.component.css']
})
export class MoreExpensiveCarComponent  {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }


  async onSubmitForm(form: NgForm) {
    const license1 = form.value.license1;
    const license2 = form.value.license2;

    let res = await fetch('http://localhost:5000/moreExpensiveCarBy2Licenses?licenseNum1='+license1+'&licenseNum2='+license2);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);
  }

}
