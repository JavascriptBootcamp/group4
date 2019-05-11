import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  hobbies:string[];
  profileForm:FormGroup;


  constructor() { 
    this.hobbies = ["basketball","soccer","tennis"];
    this.profileForm = new FormGroup({
      name:new FormControl(""),
      lastName : new FormControl(""), 
      age : new FormControl(""), 
      userName : new FormControl(""), 
      password : new FormControl(""), 
      phone : new FormControl(""), 
      email : new FormControl(""), 
      comments : new FormControl(""),
      hobbies:new FormControl(this.hobbies[3])
    })
  }

  ngOnInit() {
  }

}
