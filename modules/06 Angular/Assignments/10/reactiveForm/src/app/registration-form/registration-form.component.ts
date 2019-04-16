import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    comments: new FormControl(''),
    hobbies: new FormGroup({
      dance: new FormControl(''),
      tv: new FormControl(''),
      travel: new FormControl(''),
      gaming: new FormControl(''),
      music: new FormControl('')
    }),

  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.registrationForm.value);
  }

}
