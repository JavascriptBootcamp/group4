import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  submitted = false;
  forgotPass = this.fb.group({
    email : ['',Validators.required],
    cEmail : ['',Validators.required]
  })
  constructor(private fb:FormBuilder) { }
  submit(){
    this.submitted = true;
  }
}
