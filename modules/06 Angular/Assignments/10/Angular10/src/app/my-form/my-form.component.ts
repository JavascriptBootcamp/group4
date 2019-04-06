import { Component } from '@angular/core';
import {  Form } from '../form';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent{ //implements OnInit {
  hobbies = ['guitar','bascketball'];
  myForm = new Form('David','Sabag',32,'davidsbg11','1234','0548058509','davidsbg11@gmail.com','hello world')
  submitted = false;


  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.myForm); }
  onSubmit() { this.submitted = true; }
 
}
