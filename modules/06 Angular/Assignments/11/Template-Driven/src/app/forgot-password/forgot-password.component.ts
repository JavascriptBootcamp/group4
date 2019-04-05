import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string;
  confirmedEmail:string;
  submitted:boolean;

  constructor() {

    this.email = "";
    this.confirmedEmail = "";
    this.submitted = false;
   }

   onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
