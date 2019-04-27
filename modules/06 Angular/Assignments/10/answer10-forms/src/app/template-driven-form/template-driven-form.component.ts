import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import {HobbieService} from '../hobbie.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  submitted : boolean = false;
  // hobbies = ['Play Station', 'Video games', 'CrossFit', 'GoT', 'Angular9'];
  hobbies: string[]= [];
  model = new User('Mariya', 'Hero', 99, 'MSH', 123, '0504125745', 'msh@hasLifecycleHook.com', this.hobbies[0], 'some comments' );

  constructor(private hobbieService: HobbieService){}

  onSubmit(){
    this.submitted = true;
  }

  getHobbies(): void{
    this.hobbieService.getHobbies().subscribe(hobbies => this.hobbies = hobbies);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
    this.getHobbies();
    console.log(this.hobbies);
  }

  newUser(){
    this.model = new User('', '', 99, '', 123, '', 'msh@hasLifecycleHook.com', this.hobbies[2], '' );
  }
}
