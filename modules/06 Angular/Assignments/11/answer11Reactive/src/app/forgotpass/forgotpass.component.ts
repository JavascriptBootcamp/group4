import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

    forgotForm = new FormGroup({
      email: new FormControl(''),
      emailAgain: new FormControl('')
    });
  
}
