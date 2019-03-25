import { Component ,OnInit} from '@angular/core';

interface Person {
  isNormal: boolean;
  name: string;
  bloodPressure: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  people: Person[];
  person1: Person;
  person2: Person;
  constructor() {
    this.person1 = { name: "joe", bloodPressure: 80 , isNormal:null}
    this.person2 = { name: "jimmy", bloodPressure: 122 ,isNormal:null}
    this.people = [this.person1, this.person2]
  }
  ngOnInit(){
    for(let p of this.people){
      if (p.bloodPressure >=80 && p.bloodPressure <= 120)
      {
        p.isNormal = true;
      }
      else{
        p.isNormal = false;
      }
    }
  }
}
