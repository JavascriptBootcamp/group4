import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp = this.fb.group({
    fullname : ['',Validators.required],
    email : ['',Validators.required],
    Age : [''],
    username : ['',Validators.required],
    password : ['',Validators.required]
  })
  submitted = false;
  constructor(private fb:FormBuilder) { }
  submit(){
    this.submitted = true;
  }

  
  ngOnInit() {
  }

}
