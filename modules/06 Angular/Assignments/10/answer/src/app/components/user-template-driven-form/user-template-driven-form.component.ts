import { Component, OnInit } from '@angular/core';

import { User } from "../../classes/user";

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})
export class UserTemplateDrivenFormComponent implements OnInit {
  hobbies:string[];
  submitted:boolean;
  user:User;

  constructor() {
    this.hobbies = ['', 'Runing', 'Photograpy', 'Soccer', 'PokemonMaster'];
    this.submitted = false;
    this.user = new User("","",1,"","",1,"","",[""]);
  }

  ngOnInit() { 
    console.log(this.submitted)
  }


onSubmit() { this.submitted = true; }

}
