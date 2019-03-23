import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngProject';
     animal : string;
    type :string;
    animalsCount : number ;
     animalsArr : string[];
     x:number =0;
    ngOnInit(){
    
    this.animalsCount = 214;
this.animal="dog";
    this.type=typeof(this.animal);  
    this.animalsCount += 300;
    this.animalsArr = ['dog', 'cat', 'lion'];

    }

}
