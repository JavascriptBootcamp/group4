import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name:string;
  email:string;
  age:string;
  userName:string;
  password:string;
  submitted:boolean;

  constructor() { 

    this.name = "";
    this.email = "";
    this.age = "";
    this.userName = "";
    this.password = "";
    this.submitted = false;

  }

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
