import { Component, OnInit } from '@angular/core';
import { Person } from '../person.module'
import { User } from '../user.module'
@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {

  person: Person;
  user: User;
  comments: string
  submitted: boolean;

  constructor() {

    this.person = {
      name: "",
      lastName: "",
      age: "",
      hobbies: ["basketball","soccer","tennis"]
    }

    this.user = {
      userName: "",
      password: "",
      phone: "",
      email: "",
    }

    this.comments = "";

    this.submitted = false;

  }


  onSubmit() { this.submitted = true; }

  ngOnInit() {




  }

}
