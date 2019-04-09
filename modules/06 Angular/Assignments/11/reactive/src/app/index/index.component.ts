import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  isSubmitted = false;
  
  profileForm = this.fb.group({
    userName : ['',Validators.required],
    password : ['',Validators.required]
  });


  constructor(private fb : FormBuilder) { }

  submit(){
    this.isSubmitted = true;
  }

  ngOnInit() {
  }

}
