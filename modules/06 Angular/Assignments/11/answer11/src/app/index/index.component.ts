import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
model=new User('','');
  constructor() { }

  ngOnInit() {
  }

}
