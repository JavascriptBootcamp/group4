import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f') signUpForm : NgForm;

  userName : string;
  password : string;
  age : number;
  email : string;
  fullName : string;


  constructor() { }

  onSubmit()
  {
    console.log(this.signUpForm);
    this.resetForm();
  }

  resetForm()
  {
    this.signUpForm.reset();
  }
}
