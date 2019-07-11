import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-shirt',
  templateUrl: './add-shirt.component.html',
  styleUrls: ['./add-shirt.component.css']
})


export class AddShirtComponent implements OnInit {

  resultMessage: string;

  constructor() {
    this.resultMessage = null;
  }

  ngOnInit() {}



  async onSubmitAddShirtForm(addShirtForm: NgForm) {
    const shirtCode = addShirtForm.value.shirtCode;
    const fit = addShirtForm.value.fit;
    const height = addShirtForm.value.height;
    const shirtColor = addShirtForm.value.shirtColor;
    const shirtPrice = addShirtForm.value.shirtPrice;
    const shirtSize = addShirtForm.value.shirtSize;

    const shirtData = {shirtCode, shirtSize, shirtColor, fit, shirtPrice, height};

    console.log(shirtData);

    const res = await fetch('http://localhost:5000/addShirt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shirtData)
    });
   
    const dataFromServer = await res.json(); 
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }

}



