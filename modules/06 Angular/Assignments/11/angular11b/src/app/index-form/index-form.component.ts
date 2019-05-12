import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent   {
  submitted = false;
  profileForm = this.fb.group({
    userName : ['',Validators.required],
    password : ['',Validators.required]
  });
  constructor(private fb : FormBuilder){}
  submit(){
    this.submitted = true;
  }
}
