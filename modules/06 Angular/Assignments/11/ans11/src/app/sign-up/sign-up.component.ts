import { Component, OnInit } from '@angular/core';
import { regUser } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  regUsers:regUser[];
  constructor() {this.regUsers=[] }

  ngOnInit() {
  }
  onSubmit(value:any){
   
    this.regUsers.push(new regUser(value.fullname,value.email,value.age,value.username,value.password))
    console.log(this.regUsers[0])
  }

}
