import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer2-p2';
  bol = true
  num = 123
  str = "avi"
  obj = {};

  returnType(type){
    return typeof(type)
  }
  
  ngOnInit(){
     


  }
}
