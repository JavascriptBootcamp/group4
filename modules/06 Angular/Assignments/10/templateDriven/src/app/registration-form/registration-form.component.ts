import { Component } from '@angular/core';
import {Registration} from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  hobbies = ["soccer","tennis","basketball","hoki"];
  model = new Registration(1,"gaby","buchnik",30,"gabybu","123","g@gmail.com","052-4575458","test comments",this.hobbies[2]);
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }
  newUser(){
    this.model = new Registration(2,undefined,"buchnik",30,"yossi","321","yossi@gmail.com","052-4575458",undefined,this.hobbies[1]);
  }
  // get diagnostic(){
  //   return JSON.stringify(this.model);
  // }
}
