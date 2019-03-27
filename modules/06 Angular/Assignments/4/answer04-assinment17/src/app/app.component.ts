import { Component } from '@angular/core';
class favoriteMovie {
  title:string;
  duration:number;
  stars:string[]
  constructor() {
    
      this.title='Favorite Shimon',
      this.duration=300,
      this.stars=['shimon good', 'shimon well', 'shimon excellent', 'shimon the best',  'shimon amazing']
   };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer04-assinment17';
  
  favoriteMovie=new favoriteMovie();
  getMovieStars() {
    let starsOutput: string = '';

    for (let i = 0; i < this.favoriteMovie.stars.length; i++) {
        if (i === this.favoriteMovie.stars.length-1) starsOutput += this.favoriteMovie.stars[i];
        else starsOutput += this.favoriteMovie.stars[i] + ', ';
    }

    //return (this.favoriteMovie.title, 'lasts for', this.favoriteMovie.duration,'minutes. Stars:', starsOutput);
    return starsOutput;
  }
}
