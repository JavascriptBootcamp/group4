import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{

  @ViewChild('f') mainForm : NgForm;
  userName : string;
  userPassword : string;
  userResult : string;
  isSubmitted : boolean;
  constructor() {
    this.isSubmitted = false;
   }

  onSubmit()
  {
   this.isSubmitted = true;
   this.userResult = `Your user name is : ${this.userName}
                      Your password is : ${this.userPassword}`;
  }


}
