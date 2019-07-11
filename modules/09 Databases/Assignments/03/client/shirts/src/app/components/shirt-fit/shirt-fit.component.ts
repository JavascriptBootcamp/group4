import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shirt-fit',
  templateUrl: './shirt-fit.component.html',
  styleUrls: ['./shirt-fit.component.css']
})
export class ShirtFitComponent implements OnInit {
  resultMessage: string;

  constructor() {
    this.resultMessage = null;
   }

  ngOnInit() {
  }


  async onSubmitForm(form: NgForm) {
    const shirtFit = form.value.shirtFit;

    let res = await fetch('http://localhost:5000/shirtsSizesAndColorsByFit?fit='+shirtFit);
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);

  }

}
