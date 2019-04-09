import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  registrationForm = new FormGroup({
    personalInformation : new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age : new FormControl('')
    }),
    credential: new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
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

  onSubmit () {

  }

}
