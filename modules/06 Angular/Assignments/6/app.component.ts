import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = "contacts";
  
  contacts = [
   {fname:"Evyatar", lname:"Duek",address:"modiin",phone:"052253454",mail:"e@gmail.com"},
   {fname:"Avi", lname:"Cohen",address:"jerusalem",phone:"052456454",mail:"b@gmail.com"},
   {fname:"David", lname:"Cohen",address:"tel aviv",phone:"053253454",mail:"c@gmail.com"}

]

ngOnInit(){
 this.contacts.sort((a:any, b:any)=>
     (a.fname<b.fname) ? -1: (a.fname>b.fname)? 1: 0);
}

}
