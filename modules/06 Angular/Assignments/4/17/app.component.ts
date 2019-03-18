import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  favoriteMovie = {
    title: ' "IT" ',
    duration: 180,
    stars: ["Bill", "Sophia", "Chosen"]
}
stars="";

 printStars(arr:string[]) {
    let starsString:string = "";
    for (let i:number = 0; i < arr.length - 1; i++) {
        starsString += arr[i] + " , ";
    }
    starsString += arr[arr.length-1];

    return starsString;
}

ngOnInit(){
  this.stars =this.printStars(this.favoriteMovie.stars);
}

}
