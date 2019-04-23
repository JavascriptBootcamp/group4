import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})

export class NameEditorComponent {
  hobbies: string[] = ["Tennis", "Basketball", "Hoki"];

  profileForm = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    age: [''],
    comments: [''],
    hobbies: ['']
  });

  constructor(private fb: FormBuilder) {
   }

  
}
