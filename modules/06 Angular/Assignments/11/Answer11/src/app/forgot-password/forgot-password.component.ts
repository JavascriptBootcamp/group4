import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm : FormGroup;
  unfitAddresses : boolean;
  constructor() {
    this.unfitAddresses = false;
  }

  ngOnInit()
  {
    this.forgotPasswordForm = new FormGroup({
      'emailAddress' : new FormControl(null, [Validators.required, Validators.email]),
      'validateEmailAddress' : new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit()
  {
    if(this.forgotPasswordForm.get('emailAddress').value !== this.forgotPasswordForm.get('validateEmailAddress').value)
    {
      this.unfitAddresses = true;
    }
    else
    {
      this.unfitAddresses = false;
      console.log(this.forgotPasswordForm);
    }

  }

}
