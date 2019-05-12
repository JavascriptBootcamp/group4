import { Component } from '@angular/core';
import {ForgotPassword } from '../forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  model = new ForgotPassword("gabs@gmail.com","gabs@gmail.com")
}
