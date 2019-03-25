import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer69';
  words='a short sentence';
  wordaArr=this.words.split(" ")
  words2='a lazy fox';
  wordaArr2=this.words2.split(" ")
  
  words3='look, it is working!';
  wordaArr3=this.words3.split(" ")
}
