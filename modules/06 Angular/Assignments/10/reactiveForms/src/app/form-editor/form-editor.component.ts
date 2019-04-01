import { Component } from '@angular/core';
//import { FormGroup , FormControl } from '@angular/forms'; //create instance manually
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    age: [''],
    comments: [''],
    hobbies: ['']
  });
  constructor(private fb: FormBuilder) { }
  hobbies: string[] = ["tennis", "soccer"];
  submitted = false;

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "gaby",
      lastName: "buchnik",
      userName : "gabybu",
      password : "123123",
      phone : "054-4534534",
      age:30,
      hobbies : "tennis",
      email : "gg@gmail.com"
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
