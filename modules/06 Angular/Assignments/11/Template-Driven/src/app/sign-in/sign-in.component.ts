import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName:string;
  password:string;
  submitted:boolean;

  constructor() {

  this.userName = "";
  this.password = "";
  this.submitted = false;
   }

   onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
