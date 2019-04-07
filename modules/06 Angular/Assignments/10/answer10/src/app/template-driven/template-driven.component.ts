import { Component, OnInit } from '@angular/core';
import { TemplateDrivenForm }    from '../template-driven-form';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model:TemplateDrivenForm;
  submitted:boolean;
  hobbies:string[];
  constructor(){ 

    this.hobbies=['Soccer','Tennis','Hoki','Basketball'];

    this.model = new TemplateDrivenForm('Malak','Kh',23,"Malak77","pass","0522222","m@gmail.com","some comments",this.hobbies);

    this.submitted = false;

  }
  onSubmit(){
     this.submitted = true; 
    }

  ngOnInit() {
  }

  newTemplateDrivenForm() {
    this.model = new TemplateDrivenForm('','Kh',0,"","","","","",[]);
  }

}
