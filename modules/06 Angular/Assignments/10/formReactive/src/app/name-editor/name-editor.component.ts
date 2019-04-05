import { Component, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})

export class NameEditorComponent implements OnInit {
  
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
  hobbies: string[] = ["Tennis", "Basketball", "Hoki"];
  
  
  ngOnInit() {
  }

}
