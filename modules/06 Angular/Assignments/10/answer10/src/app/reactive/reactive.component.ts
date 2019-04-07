import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl(''),
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    comments: new FormControl(''),
    hobbies: new FormGroup({
      Guitar: new FormControl(''),
      Basketball: new FormControl('')
    })
})
    ngOnInit(){
    }

    onSubmit(){
      console.warn(this.reactiveForm.value);
    }


  
}
