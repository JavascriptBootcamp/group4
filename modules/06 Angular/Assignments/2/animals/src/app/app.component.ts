import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public animals:any;

  constructor(){
   
  }
  animals_string(){
    this.animals="dog";
    return this.animals;
  }

  animals_number(){
    this.animals=214;
    this.animals = this.animals + 300;
    return this.animals;
  }

  animals_array(){
    this.animals = ['dog', 'cat', 'lion']; 
    return this.animals;
  }
ngOnInit(){

}
}
