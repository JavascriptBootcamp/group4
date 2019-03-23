import { Component } from '@angular/core';

interface Iperson{
  name:string,
  last_name:string,
  Address:string,
  Phone:string,
  Email:{
    link:string,
    mail:string
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  persons:Iperson[]

  constructor(){
    this.persons = [
      {name:"Daniel",last_name:"Brosh",Address:"Ashkelon",Phone:"054-5796354",Email:{link:"mailto:daniel@d.com",mail:"daniel@d.com"}},
      {name:"Nadav",last_name:"Choen",Address:"Jerusalem",Phone:"054-5796354",Email:{link:"mailto:nadav@c.com",mail:"nadav@c.com"}},
      {name:"Uriel",last_name:"Brosh",Address:"Haifa",Phone:"054-5796354",Email:{link:"mailto:uriel@u.com",mail:"uriel@u.com"}}
    ]
  }

}
