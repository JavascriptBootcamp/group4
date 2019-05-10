import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    Age: ['', Validators.required],
    UserName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

}
