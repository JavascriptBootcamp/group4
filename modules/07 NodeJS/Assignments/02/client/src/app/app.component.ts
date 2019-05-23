import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contactPersons:object[];
  person1:object;
  person2:object;
  person3:object;
  person4:object;
  constructor(private apiService : ApiService){
      this.contactPersons =[];
      this.person1 = {name:"Ofek",lastName:"Arbeli",address:"Herzeliya",phone:"0505050505",email:"ofekrbeli@gmail.com"}
      this.person2 = {name:"Moshe",lastName:"Moshe",address:"Jerusalem",phone:"0505050505",email:"bloblo@gmail.com"}
      this.person3 = {name:"Shimon",lastName:"Shimon",address:"Tel-Aviv",phone:"0505050505",email:"blabla@gmail.com"}
      this.person4 = {name:"Aaa",lastName:"Aaaa",address:"Tel-Aviv",phone:"0505050505",email:"aaaa@gmail.com"}
  }
  ngOnInit(){
    this.contactPersons.push(this.person1,this.person2,this.person3,this.person4);
    this.contactPersons.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  sendToServer(){
    this.apiService.sendToServer(this.contactPersons);
  }
}