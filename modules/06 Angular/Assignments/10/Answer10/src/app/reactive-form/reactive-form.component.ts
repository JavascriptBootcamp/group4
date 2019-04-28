import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  signUpForm : FormGroup;
  constructor() { }

  ngOnInit()
  {
    this.signUpForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'age' : new FormControl(null, Validators.required),
      'userName' : new FormControl(null,Validators.required),
      'phoneNumber' : new FormControl(null),
      'emailAddress' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,Validators.required),
    });
  }

  onSubmit()
  {
   console.log(this.signUpForm); 
  }

}
