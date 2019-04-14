import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    signup = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl('')
    });
}
