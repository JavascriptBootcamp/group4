import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms' 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formGroup:FormGroup;
  isSubmit:boolean;
  submitClicked:boolean
  constructor(builder:FormBuilder) {
    this.submitClicked = false;
    this.isSubmit = false;
    this.formGroup = builder.group({
      personal_details:builder.group({
      fullname:[
        "",[
          Validators.required,
        ]
      ],
      email:[
        "",[
          Validators.required,
          Validators.email
        ]
      ],
      age:[
        "",[
          Validators.required
        ]
      ]
    }),
    user_details:builder.group({
      username:[
        "",[
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
      password:[
        "",
        Validators.required,
      ]
    })

  })
  
  }

  onSubmit(e,formGroup){
    e.preventDefault();
    this.submitClicked = true;
    if(formGroup.valid){
      this.isSubmit = true;
    }
    console.log(formGroup);
  }

  ngOnInit() {
  }

}
