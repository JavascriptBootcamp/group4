import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isSubmitted = false;

  forgotPass = this.fb.group({
    email : ['', Validators.required],
    cEmail : ['', Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  submit(){
    this.isSubmitted = true;
  }

  ngOnInit() {
  }

}
