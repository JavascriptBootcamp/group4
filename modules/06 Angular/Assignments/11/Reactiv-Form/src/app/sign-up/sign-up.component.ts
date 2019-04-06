import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    age:new FormControl(''),
    userName:new FormControl(''),
    password:new FormControl('')
  })

  constructor() { }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  ngOnInit() {
  }

}
