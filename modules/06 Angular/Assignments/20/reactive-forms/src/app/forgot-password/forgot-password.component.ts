import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {FormService} from '../form.service'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formGroup:FormGroup;
  isSubmit:boolean;
  submitClicked:boolean;
  sameEmailValues:boolean;
  constructor(private formService:FormService,builder:FormBuilder) { 
    this.isSubmit = false;
    this.submitClicked = false; 
    this.sameEmailValues = true;  
    this.formGroup = builder.group({
      email:[
        "",[
          Validators.required,
          Validators.email
        ]
      ],
      confirmEmail:[
        "",[
          Validators.required,
          Validators.email
        ]
      ]
    })
  }

  
  onSubmit(e,form){
      e.preventDefault();
      this.submitClicked =true;
      console.log(form);
      const sameValues : boolean = this.formService.checkValues(form.value.email,form.value.confirmEmail);
      this.sameEmailValues = sameValues;  
      if(form.valid && sameValues){
        this.isSubmit = true;
      }
  } 

  ngOnInit() {
  }

}
