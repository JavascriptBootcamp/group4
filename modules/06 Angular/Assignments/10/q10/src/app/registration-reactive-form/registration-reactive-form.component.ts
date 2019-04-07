import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-reactive-form',
  templateUrl: './registration-reactive-form.component.html',
  styleUrls: ['./registration-reactive-form.component.css']
})
export class RegistrationReactiveFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),

    contact: new FormGroup({
      phoneNumber: new FormControl(''),
      emailAddress: new FormControl('')
      }),

    credentials: new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
      }),

    misc: new FormGroup({
      comments: new FormControl(''),
      hobbies: new FormControl('')
        }),
    
  });

  constructor() { 
  }

  ngOnInit() {
  }

  onSubmit() {
    // // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value["misc"]);
    // // console.log();
  }

}
