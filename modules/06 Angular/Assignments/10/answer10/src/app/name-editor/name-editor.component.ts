import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  myForm: FormGroup;
  hobbies = ['Play Music', 'Watch TV',
  'Meet With My Friends', 'Play FIFA'];
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      id: 1,
      firstName: ['',Validators.required],
      lastBame: ['',Validators.required],
      age: [20,Validators.required],
      userName: ['',Validators.required],
      password: ['',Validators.required],
      phoneNumber: [50,Validators.required],
      email: ['',Validators.required],
      comments: '',
      hobbie: [this.hobbies[0],Validators.required],
    })
  }
  firstName = new FormControl('');
}
