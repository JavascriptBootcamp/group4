import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HobbieService } from '../hobbie.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  hobbies: string[] = [];

  constructor(private hobbieService: HobbieService) { }

  userForm = new FormGroup({

    personalInfo: new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    }),

    credentialsInfo: new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    }),

    contactInfo: new FormGroup({
      phoneNumber: new FormControl(''),
      email: new FormControl('')
    }),

    miscInfo: new FormGroup({
      comments: new FormControl('Comments'),
      hobbies: new FormControl(this.hobbies)
    })
  });
  // updateFirstName(){
  //   this.firstName.setValue('Jorah');
  // }
  ngOnInit() {
    this.getHobbies();
  }

  getHobbies(): void {
    this.hobbieService.getHobbies().subscribe(hobbies => this.hobbies = hobbies);
  }

  onSubmit(){
     // TODO: Use EventEmitter with form value
     console.warn(this.userForm.value);
  }

}
