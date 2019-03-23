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
  
  this.contacts.sort(function compare(a:any, b:any) {
    if (a.fname<b.fname) {
      return -1;
    }
    if (a.fname>b.fname) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}

}
