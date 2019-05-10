import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  ForgotForm = this.fb.group({
    email: ['', Validators.required],
    cEmail: ['', Validators.required],
   
  });
  ngOnInit() {
  }

}
