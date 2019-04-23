import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('');
  emailRepeated = new FormControl('');

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this);
  }


}
