import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm:FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      personInformtion:new FormGroup({
             fristName:new FormControl(null),
              lastName:new FormControl(null),
              age:new FormControl(null)
      }),
      credentials:new FormGroup({
        userName:new FormControl(null),
        password:new FormControl(null)
      }),
      contact:new FormGroup({
        tel:new FormControl(null),
        email:new FormControl(null)
      }),
      misc:new FormGroup({
        comments:new FormControl(null),
        hobbies:new FormControl(null)
      })
    })
  }

  onSubmit(){
   console.log(this.registrationForm);
  }
}
