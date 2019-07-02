import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
    console.log("sdad");
  }
}
