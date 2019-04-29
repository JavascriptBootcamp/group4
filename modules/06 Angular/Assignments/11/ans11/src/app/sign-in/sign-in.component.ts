import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  users:user[];
  constructor() {
    this.users=[];
   }

  ngOnInit() {
  }
  onSubmit(value:any){
    console.log(value.password)
    this.users.push(new user(value.user,value.password))
    console.log(this.users[0])
  }
}
