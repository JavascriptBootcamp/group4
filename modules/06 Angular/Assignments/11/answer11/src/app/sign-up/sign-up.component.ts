import { Component, OnInit } from '@angular/core';
import { SignUp } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model = new SignUp("", "", null, "", "");
  constructor() { }

  ngOnInit() {
  }

}
