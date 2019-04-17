import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-td-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})
export class UserTDFormComponent {
  hobbies: string[];
  submitted: boolean;
  successMsg: string;

  constructor() {
    this.hobbies = ['', 'Runing', 'Photograpy', 'Soccer', 'PokemonMaster'];
    this.submitted = false;
    this.successMsg = "";
  }

  onSubmit(form: NgForm) {
    let name: string = `${form.controls.firstName.value} ${form.controls.lastName.value}`;
    this.successMsg = `Thank you ${ name }!! We receive your info and keep in touch`;
    this.submitted = true;
  }
}

