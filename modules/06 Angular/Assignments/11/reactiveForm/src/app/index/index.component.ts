import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  indexForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
   
  });

  ngOnInit() {
  }

}
