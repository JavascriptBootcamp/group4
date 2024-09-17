import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  resultMessage:string;
  constructor() { 
    this.resultMessage=""
  }

  ngOnInit() {
  }
  async AddCarForm(car){
    const res = await fetch('http://localhost:5000/addCar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    });
    const dataFromServer = await res.json();
    this.resultMessage = JSON.stringify(dataFromServer);

    setTimeout( () => {
      this.resultMessage = null;
    }, 5000);
  }
  
}
