import { Component, OnInit } from '@angular/core';
import {Forgot} from '../forgot';
import { from } from 'rxjs';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
model=new Forgot('','');
  constructor() { }

  ngOnInit() {
  }

}
