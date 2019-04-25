import { Component, OnInit } from '@angular/core';
import {RegisterPerson} from '../register-person';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  hobbies=['Soccer', 'Tennis','Basketball','Hoki'];
  model=new RegisterPerson("shai","Dr Pretty",21,this.hobbies[0]);
  submitted=false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit():void{
    this.submitted=true;
  }

  newRegister()
  {
    
  }

}
