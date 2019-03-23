import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public favColors:string[];
  public order:string[];
  public books:object[];
  public book1:object;
  public book2:object;
  public favBooks:object[];
  public favBook1:object;
  public favBook2:object;
  public favImages:object[]
  public image1:object;
  public image2:object;
  constructor(){
    this.favColors = ["Purple","Gray","Red","Blue"];
    this.order = ["1st","2nd","3rd","4th"];
    this.books = [];
    this.book1 = {title: "Harry Potter",author: "J.K rolling",alreadyRead: false};
    this.book2 = {title: "The Bible",author: "GOD",alreadyRead: true};
    this.favBooks= [];
    this.favBook1 = {title:"Lord Of the Ring",author:"J.K rolling", date:"23.08.90",publisher:"OOB", pages:555, note: "Very good"};
    this.favBook2 = {title:"Spiderman",author:"Someone", date:"21.02.98",publisher:"CCN", pages:555, note: "Very good"};
    this.favImages= [];
    this.image1={placeName:"Argentina - Buenos Aires", wikiLink:"https://en.wikipedia.org/wiki/Buenos_Aires", src:"https://boston-consulting-group-res.cloudinary.com/image/fetch/w_601,h_342,q_auto,f_auto/http://image-src.bcg.com/Images/Buenos-Aires_79764405_1050x590_tcm-33709.jpg"};
    this.image2={placeName:"Chile - Karatera Austral", wikiLink:"https://he.wikipedia.org/wiki/%D7%A7%D7%90%D7%A8%D7%98%D7%A8%D7%94_%D7%90%D7%90%D7%95%D7%A1%D7%98%D7%A8%D7%9C", src:"http://www.carretera-austral-en-auto.cl/wp-content/uploads/2014/10/IMG_20150331_220511.jpg"};
  }
  ngOnInit(){
    this.books.push(this.book1);
    this.books.push(this.book2);
    this.favBooks.push(this.favBook1);
    this.favBooks.push(this.favBook2);
    this.favImages.push(this.image1);
    this.favImages.push(this.image2);
  }
  hasRead(read:boolean){
    if(read)
      return "already read";
    else
      return "still havn't read"
  }
}
