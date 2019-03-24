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


Array.prototype.sort = function(){
  return compareCells(this);
 
  function compareCells(arr:Iperson[]){
     let x:Iperson,y:Iperson;
     for(let j:number=0;j<arr.length;j++){
        x = {...arr[j]};
       y = {...arr[j+1]};
       if(j<arr.length-1){
       if(x.name.toLowerCase()>y.name.toLowerCase()){
       arr[j] = y;
       arr[j+1] = x;
        compareCells(arr);
        break;
       }
   }
  }
   return arr;
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
      {name:"Uriel",last_name:"Brosh",Address:"Haifa",Phone:"054-5796354",Email:{link:"mailto:uriel@u.com",mail:"uriel@u.com"}},
      {name:"Aadav",last_name:"Choen",Address:"Jerusalem",Phone:"054-5796354",Email:{link:"mailto:nadav@c.com",mail:"nadav@c.com"}},
      {name:"Briel",last_name:"Brosh",Address:"Haifa",Phone:"054-5796354",Email:{link:"mailto:uriel@u.com",mail:"uriel@u.com"}}
    ]
  }


}

   

