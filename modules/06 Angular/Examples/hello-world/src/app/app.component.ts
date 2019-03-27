import { Component, OnInit } from '@angular/core';

interface Person {
  name: string,
  age: number,
  hobbies: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: Person[];
  constructor() {
    // this.person.name = "Gaby";
    // this.person.age = 18;
    // this.person.hobbies = ["surfing", "food"];
    this.persons = [
      {name: "Gaby", age: 18, hobbies: ["surfing", "food"]},
      {name: "Shai", age: 17, hobbies: ["food"]}
    ]

  }

  ngOnInit() {
    
  }
}
