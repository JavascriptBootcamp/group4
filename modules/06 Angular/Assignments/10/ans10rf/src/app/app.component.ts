import { Component ,OnInit} from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ans10rf';
  registrationForm:FormGroup;
  constructor(){}
  ngOnInit(){
    this.registrationForm=new FormGroup({
      fullName:new FormControl(),
    });
  }
}
