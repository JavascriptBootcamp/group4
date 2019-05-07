import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms' 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formGroup:FormGroup;
  isSubmit:boolean;
  submitClicked:boolean;
  constructor(builder:FormBuilder) {
   this.isSubmit = false;
   this.submitClicked = false; 
   this.formGroup = builder.group({

    userDetails:builder.group({
      username:[
        "",[
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
      password:[
        "",[
          Validators.required
        ]
      ]
    })
   })

   }

   onSubmit(e,form){
       e.preventDefault();
       this.submitClicked = true;
       console.log(form);
       if(form.valid){
         this.isSubmit = true;
       }
   }

  ngOnInit() {
  }

}
