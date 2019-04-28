import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent{

  @ViewChild('form') signUpForm : NgForm;

  firstName : string;
  lastName : string;
  age : number;
  userName : string;
  password : string;
  phoneNumber : string;
  emailAddress : string;
  comments : string;
  
  constructor() { 

  }

  onSubmit()
  {
    this.signUpForm.reset();
  }


}
