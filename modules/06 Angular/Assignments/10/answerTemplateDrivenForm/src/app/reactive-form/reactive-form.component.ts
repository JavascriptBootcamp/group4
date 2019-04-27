import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  hobbies:string[]=['Soccer','Tennis','Basketball','Hoki'];
  
  userForm=new FormGroup({
  piForm:new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  }),

  credentialsForm: new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  }),

  contactForm: new FormGroup({
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  }),
  miscForm: new FormGroup({
    comments: new FormControl(''),
    hobby: new FormControl('')
  })
});
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
    
    
    
  }

}
