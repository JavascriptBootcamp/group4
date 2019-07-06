import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CarsService} from '../cars.service';
@Component({
  selector: 'app-adding-car',
  templateUrl: './adding-car.component.html',
  styleUrls: ['./adding-car.component.css']
})
export class AddingCarComponent implements OnInit {
  carForm: FormGroup;
  constructor(builder: FormBuilder,private carsService:CarsService) { 
  this.carForm = builder.group({
    license: ["", [
      Validators.required
    ]
    ],
    Manufacturer: ["", [
      Validators.required
    ]
    ],
    Model: ["", [
      Validators.required
    ]
    ],
    Year: ["", [
      Validators.required
    ]
    ],
    KM: ["", [
      Validators.required
    ]
    ],
    Price: ["", [
      Validators.required
    ]
    ]
  });

}


ngOnInit() {
}


onSubmit(carForm){

  this.carsService.addCar(carForm.value)
}

}
