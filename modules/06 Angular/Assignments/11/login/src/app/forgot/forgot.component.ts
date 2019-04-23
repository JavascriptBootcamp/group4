import { Component, OnInit } from '@angular/core';
import { ForgotPass } from '../ForgotPass.model';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  model = new ForgotPass("","");
  constructor() { }

  ngOnInit() {
  }

}
