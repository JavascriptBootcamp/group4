import { Component, OnInit } from '@angular/core';

interface Person {
  fname: string;
  lnname: string;
  age: number;
  user: string;
  password: string;
  phone: string;
  email: string;
  comments: string;
  hobby: string;

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hobbies: string[] = ["Tennis", "Basketball", "Hoki"];
  model: Person = { fname: null, lnname: null, age: null, user: null, password: null, comments: null, email: null, phone: null, hobby: null };
  onSubmit() {
  }

  constructor() {
  }
  ngOnInit() {
  }

}
