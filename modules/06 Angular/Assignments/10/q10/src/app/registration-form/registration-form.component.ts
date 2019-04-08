import { Component } from '@angular/core';
import {Registration} from './Registration'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {


  constructor() {
   }

  hobbies = ['Soccer', 'Tennis', 'Basketball', 'Hoki'];
  model = new Registration(1,"daniel","brosh",30,"dan","123","d@gmail.com","052-054-5469876","test comments",this.hobbies[2]);
  submitted = false;


  onSubmit() { this.submitted = true; }
}
