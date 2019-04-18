import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signForm: FormGroup;
  submitted: boolean;
  successMsg: string;

  constructor(private fb: FormBuilder) { 
    this.submitted = false;
    this.successMsg = '';

    this.signForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(60)]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let name: string = this.signForm.controls.fullName.value;
    this.successMsg = `Thanks for Enrolling to 'My Web Site', ${ name }!`;
    this.submitted = true;
  }

}
