import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer10-p1-m6';
  frName="avi";
  lsName ="get";  
  hobbies = ["swim","read","learn","run"];
 
 
  onSubmit(data:NgForm){
    console.log(data);
  }
}