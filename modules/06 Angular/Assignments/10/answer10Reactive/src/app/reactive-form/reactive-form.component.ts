import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registrationForm = new FormGroup({
    personalInformation: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl('')
    }),
    credentials : new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    }),
    contact: new FormGroup({
      phone: new FormControl(''),
      email: new FormControl('')
    }),
    misc: new FormGroup({
      comments: new FormControl(''),
      hobbies: new FormControl('')
    })
  });

  onSubmit() {
    console.log("pring");
  }
}
