import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  hobbies = ['dance', 'tv', 'travel', 'gaming', 'music'];
  model = new Registration("Eli", "Levi", 10, "Elio", "password", 5050505050, "Eli@walla.com", "I Like this excerise", this.hobbies[0]);
  submitted = false;

  onSubmit() { this.submitted = true; }
  newForm() {
    this.model = new Registration('', '', 22, '', '', 222222222, '', '', '');
  }
  constructor() { }

  ngOnInit() {
  }

}
