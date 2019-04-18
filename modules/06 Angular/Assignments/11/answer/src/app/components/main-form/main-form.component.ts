import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
// implements reactive form approach
export class MainFormComponent implements OnInit {
  mainForm: FormGroup;
  submitted: boolean;
  successMsg: string;

  constructor(private fb: FormBuilder) {
    this.submitted = false;
    this.successMsg = '';

    this.mainForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.mainForm);
    let name: string = this.mainForm.controls.userName.value;
    this.successMsg = `Welcome Back, ${ name }!`;
    this.submitted = true;
  }

}
