import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-r-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserRFormComponent {
  hobbies: string[];
  submitted: boolean;
  successMsg: string;

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hobbies = ['', 'Runing', 'Photograpy', 'Soccer', 'PokemonMaster'];
    this.submitted = false;
    this.successMsg = "";

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("05[0-9]{8}")]],
      email: ['', [Validators.required, Validators.pattern(".+@.+.(com|co.il)")]],
      comment: '',
      hobbie: ''
    });
  }

  onSubmit() {
    console.log(this.userForm);
    let name: string = `${this.userForm.controls.firstName.value} ${this.userForm.controls.lastName.value}`;
    this.successMsg = `Thank you ${ name }!! We receive your info and keep in touch`;
    this.submitted = true;
  }

}
