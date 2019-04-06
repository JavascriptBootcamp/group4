import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('') 
  }) 


  constructor() { }

  onSubmit(){
    console.log(this.signInForm.value);
  }

  ngOnInit() {
  }

}
