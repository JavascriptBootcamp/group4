import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  age= new FormControl('');

  userName = new FormControl('');
  password = new FormControl('');

  phoneNumber = new FormControl('');
  email = new FormControl('');

  comments = new FormControl('');
  hobby = new FormControl('');
  
  hobbies=['Soccer', 'Tennis','Basketball','Hoki'];
  submitted=false;
  constructor() { }

  ngOnInit() {
  }

}
