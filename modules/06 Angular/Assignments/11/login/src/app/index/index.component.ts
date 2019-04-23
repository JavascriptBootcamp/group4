import { Component, OnInit } from '@angular/core';
import { User } from '../userForm.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  model = new User("","");

  
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
