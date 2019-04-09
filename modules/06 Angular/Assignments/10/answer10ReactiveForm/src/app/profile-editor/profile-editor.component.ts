import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

 
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})


export class ProfileEditorComponent {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    credentials: this.fb.group({
      username: [''],
      password: ['']
    }),
    contact: this.fb.group({
      PhoneNumber: [''],
      email: ['']
    }),
    misc: this.fb.group({
      comments: [''],
      hobbies: ['']
    })
  });


  constructor(private fb: FormBuilder) { }


  onSubmit() {
    console.warn(this.profileForm.value);
  }

}

