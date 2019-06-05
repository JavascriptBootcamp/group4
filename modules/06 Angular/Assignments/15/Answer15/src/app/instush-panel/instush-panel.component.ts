import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { AuthorInfoService } from '../author-info.service';
import IAuthor from '../author.model';

@Component({
  selector: 'app-instush-panel',
  templateUrl: './instush-panel.component.html',
  styleUrls: ['./instush-panel.component.css']
})
export class InstushPanelComponent implements OnInit, AfterViewChecked {

  imgResources : {imgUrl : string, authorInfo: IAuthor, id : string}[];
  showBigImage : boolean;
  bigImg : string;

  guyInfo : IAuthor; 
  mariyaInfo : IAuthor; 
  liorInfo : IAuthor;
  constructor(private authorInfoServ : AuthorInfoService, private cdRef:ChangeDetectorRef){
    this.guyInfo = {ID : '203507926', name: 'Guy', profilePictureUrl: 'www.guyagiv.com', facebookProfileUrl: 'www.facebook.com/guyagiv', description: 'Im so good lol!'};
    this.mariyaInfo = {ID : '303079551', name: 'Mariya', profilePictureUrl: 'www.mariyalol.com', facebookProfileUrl: 'www.facebook.com/mariyastash', description: 'Im so happy lol!'};
    this.liorInfo =  {ID : '303079554', name: 'Lior', profilePictureUrl: 'www.lioragiv.com', facebookProfileUrl: 'www.facebook.com/lioragiv', description: 'Im so wonderfull lol!'};
    


    this.imgResources = [
      
      {imgUrl : 'https://www.shelfleigh.com/wp-content/uploads/2018/11/ssthoughts-300x300.png',authorInfo : this.guyInfo,id: '1'},

      {imgUrl :'https://www.earnthenecklace.com/wp-content/uploads/2017/07/Tyrion-Lannister-Theory-300x300.jpg',
      authorInfo : this.mariyaInfo, id: '2'},

      {imgUrl :'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-game-of-thrones-carice-van-houten.jpg',
      authorInfo : this.liorInfo, id: '3'},

      {imgUrl :'https://images-cdn.9gag.com/photo/aMZDLDM_460s.jpg',
      authorInfo : this.guyInfo, id: '4'},

      {imgUrl :'https://img.zergnet.com/2019095_300.jpg',
      authorInfo : this.mariyaInfo, id: '5'},

      {imgUrl :'https://memegenerator.net/img/images/300x300/11125414.jpg',
      authorInfo : this.liorInfo, id: '6'},

      {imgUrl :'http://i0.wp.com/www.kickassfacts.com/wp-content/uploads/2015/07/Khaleesi.jpg',
      authorInfo : this.guyInfo, id: '7'},

      {imgUrl :'http://austinsbesttowing.com/wp-content/uploads/parser/khal-drogo-beard-1.jpg',
      authorInfo : this.liorInfo, id: '8'},

      {imgUrl :'http://cdn02.cdn.justjared.com/wp-content/uploads/headlines/2016/06/arya-stark-moment-game-of-thrones.jpg',
      authorInfo : this.liorInfo, id: '9'}
    ];

    this.showBigImage = false;
    this.bigImg = "#";
}

  ngOnInit(){
    this.authorInfoServ.saveAuthorInfo(this.guyInfo);
    this.authorInfoServ.saveAuthorInfo(this.mariyaInfo);
    this.authorInfoServ.saveAuthorInfo(this.liorInfo);
  }

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }

  onImagePressed(e : string){
    console.log(e);
    this.showBigImage = true;
    this.bigImg = e;
  }

  closeBigImage()
  {
    this.showBigImage = false;
  }
}
