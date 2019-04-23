import { Component, OnInit } from '@angular/core';
import { SignForm } from '../signForm.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  model = new SignForm("", "", null, "", "");
  ngOnInit() {
  }

}
