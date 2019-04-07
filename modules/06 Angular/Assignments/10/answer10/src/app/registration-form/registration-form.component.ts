import { Component } from '@angular/core';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  hobbies = ['Play Music', 'Watch TV',
  'Meet With My Friends', 'Play FIFA'];

  model = new Registration(18, '', '', 20, '', '', 50,'','',this.hobbies[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newRegistration() {
    this.model = new Registration(18, '', '', 20, '', '', 50,'','',this.hobbies[0]);
  }
}
