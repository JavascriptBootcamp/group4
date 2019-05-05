import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  f: FormGroup;
  constructor(builder: FormBuilder) {
    this.f = builder.group({
      // username
      username: builder.group({
        firstname: [
          "Shai"
        ],
        lastname: [
          "Mesisterano", [
            Validators.required,
            Validators.minLength(2),
            this.myvalidator
          ]
        ]
      })
    })
  }

  myvalidator(control: FormControl):{[key:string]:boolean} {
    if (control.value.indexOf('b') > -1){
      return null;
    }
    return {
      'containsB': true
    }
  }

  onSubmit() {
    console.log('f', this.f);
    console.log('f.get.lastname', this.f.get('username').get('lastname'));
  }

}
