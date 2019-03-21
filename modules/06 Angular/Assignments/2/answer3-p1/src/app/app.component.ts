import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'answer3-p1';
  animals = "dog";
  type = typeof this.animals;
  num = 214;
  arr = ['dog', 'cat', 'lion'];//animals array
ngOnInit(){

  
    this.num += 300;

}
}
