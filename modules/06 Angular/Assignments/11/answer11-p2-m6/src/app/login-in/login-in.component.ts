import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  userName = new FormControl('');
  password = new FormControl('');

  constructor() { }

  onSubmit() {
    console.log(this);
  }

  ngOnInit() {
  }

}
