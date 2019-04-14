import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from "../../classes/user";

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {
  hobbies: string[];
  submitted: boolean;
  user: User;

  userForm = new FormGroup({
    firstName: new FormControl(['', Validators.required]),
    lastName: new FormControl(['', Validators.required]),
    age: new FormControl(['', Validators.required]),
    userName: new FormControl(['', Validators.required]),
    password: new FormControl(['', Validators.required]),
    phone: new FormControl(['', Validators.required]),
    email: new FormControl(['', Validators.required])
  });

  constructor() {
    this.hobbies = ['', 'Runing', 'Photograpy', 'Soccer', 'PokemonMaster'];
    this.submitted = false;
    this.user = new User("", "", 1, "", "", 1, "", "", [""]);
  }

  ngOnInit() {
  }

  onSubmit(event) { 
    this.submitted = true; 
    event.preventDefault();
    return false;
  }

}
