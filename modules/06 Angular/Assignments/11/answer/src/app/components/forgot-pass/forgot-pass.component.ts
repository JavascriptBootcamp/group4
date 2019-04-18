import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  submitted: boolean;
  successMsg: string;
  savedEmail: string;
  equalEmails: boolean;

  constructor() {
    this.submitted = false;
    this.equalEmails = false;
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    let email: string = form.controls.email.value;
    this.successMsg = `User email confirmed! Password was sent to ${email}`;
    this.submitted = true;
  }

  saveEmail(emailAdd: string) { 
    this.savedEmail = emailAdd;
  }

  checkEmail(emailAdd: string) { 
    this.equalEmails = (this.savedEmail === emailAdd);
  }

}
