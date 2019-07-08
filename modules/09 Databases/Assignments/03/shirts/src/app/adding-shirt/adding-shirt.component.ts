import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ShirtsService} from '../shirts.service';
@Component({
  selector: 'app-adding-shirt',
  templateUrl: './adding-shirt.component.html',
  styleUrls: ['./adding-shirt.component.css']
})
export class AddingShirtComponent implements OnInit {

  shirtForm: FormGroup;
  constructor(builder: FormBuilder,private shirtsService:ShirtsService) { 
  this.shirtForm = builder.group({
    size: ["", [
      Validators.required
    ]
    ],
    color: ["", [
      Validators.required
    ]
    ],
    fit: ["", [
      Validators.required
    ]
    ],
    price: ["", [
      Validators.required
    ]
    ]
   
  });

}


ngOnInit() {
}


onSubmit(shirtForm){

  this.shirtsService.addShirt(shirtForm.value)
}

}
