import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  favoriteMovie:object;

      ngOnInit(){      
        this.favoriteMovie = {
          title: ' "IT" ',
          duration: 180,
          stars: ["Bill", "Sophia", "Chosen"]
      }

   }
}
