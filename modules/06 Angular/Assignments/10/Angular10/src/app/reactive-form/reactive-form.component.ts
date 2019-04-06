import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators,FormBuilder,FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {
  reactiveForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl(''),
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    comments: new FormControl(''),
    hobbies: new FormGroup({
      Guitar: new FormControl(''),
      Basketball: new FormControl('')
    }),

  });

}
