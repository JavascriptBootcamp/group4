import { Component } from '@angular/core';
import {SignUp} from '../sign-up';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model = new SignUp("gaby buchnik","g@gmail.com",30,"gabybu","123123");
}
