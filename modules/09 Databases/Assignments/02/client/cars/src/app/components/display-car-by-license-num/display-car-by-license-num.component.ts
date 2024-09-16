import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-display-car-by-license-num',
  templateUrl: './display-car-by-license-num.component.html',
  styleUrls: ['./display-car-by-license-num.component.css']
})
export class DisplayCarByLicenseNumComponent {
  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }


  async onSubmitLicenseForm(licenseForm: NgForm) {
    const licenseNum = licenseForm.value.carLicenseNum;
    console.log(licenseNum);

    let res = await fetch('http://localhost:5000/carDetailsByLicense?licenseNum='+licenseNum);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);
  }
}
