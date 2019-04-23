import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fullName = new FormControl('');
  email = new FormControl('');
  age = new FormControl('');
  username = new FormControl('');
  password = new FormControl('');

  constructor() {}

  ngOnInit() {}


  onSubmit() {
    console.log(this);
  }

}
