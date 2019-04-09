import { Component} from '@angular/core';
import {Registration} from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  hobbies: string[];
  register: Registration;
  submitted: boolean;

  constructor() {
    this.hobbies = ['basketball', 'swimming', 'running', 'music'];

    this.register = new Registration(1, 'David', 'Lev', 200, 'DavidLev1', '1234', 'davidlev@gmail.com', '058-1111111');

    this.submitted = false;
  }

  onSubmit() { this.submitted = true; }
  
  newRegister(){
    this.register = new Registration(2, 'David2', 'Lev2', 400, 'DavidLev2', '4321', 'davidlev2@gmail.com', '058-1111112');
  }

}

