import { Component } from '@angular/core';

interface IfavoriteMovie {
  title:string,
  duration:number,
  stars:string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
public favoriteMovie:IfavoriteMovie;

constructor(){
  this.favoriteMovie = {
    title : "IT",
    duration:180,
    stars: ["Bill", "Sophia", "Chosen"]
  }
}

printStars():string{
  let str:string = "";
 for(let i = 0; i<this.favoriteMovie.stars.length;i++){
  if(i===this.favoriteMovie.stars.length-1){
    str += this.favoriteMovie.stars[i] + ".";
   }
   else{
    str += this.favoriteMovie.stars[i] + ","
   }
  }
  return str;
}
}
