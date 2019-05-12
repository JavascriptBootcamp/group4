import { Injectable, OnInit } from '@angular/core';
import {ImageRelatedData} from './custom-classes/imageRelatedData';
import {AuthorImageRelatedData} from './custom-classes/authorImageRelatedData';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { stringify } from '@angular/core/src/util';


@Injectable({
  providedIn: 'root'
})


export class InstushService implements OnInit{
  flexItemNum: number;
  imagesRelatedDataArr: ImageRelatedData[];
  authorImagesRelatedDataArr: AuthorImageRelatedData[];
  clickedAuthorName: string;
  currentAuthorID: number;
  authorsNamesArr: string[];
  
  authorDataObj: {
    name?: string,
    id?: number, 
    profilePicURL?: string,
    facebookProfileURL?: string,
    description?: string
  };

  authorsDataArr: any[];

  // The ActivatedRoute object gives access to params passed in URL
  constructor(private router: Router, private route: ActivatedRoute) {
    this.flexItemNum = 0;
    this.imagesRelatedDataArr = [];
    this.authorImagesRelatedDataArr = [];
    this.clickedAuthorName = 'someAuthorName';
    this.currentAuthorID = 0;
    this.authorsNamesArr = [];
    this.authorDataObj = {};
    this.authorsDataArr = [];

    this.getAuthorsDataArr();
  }

  ngOnInit() {
    this.currentAuthorID = this.route.snapshot.params['authorID'];
    this.clickedAuthorName = this.route.snapshot.params['authorName'];

    this.route.params.subscribe(
      (params: Params) => {
        this.currentAuthorID = params['this.currentAuthorID'];
        this.clickedAuthorName = params['this.currentAuthorName'];
      }
    );
  }


  fillImagesRelatedDataArr(): void {
    fetch('https://picsum.photos/list')
      .then(data => {
        data.json()
          .then(json => {
            let idx: number = 0;

            json.forEach(element => {
              let imageRelatedData = new ImageRelatedData(
                `https://picsum.photos/200/300?image=${json[idx].id}.id`,
                `https://picsum.photos/200/300?image=${json[idx].id}`,
                0,
                `${json[idx].author}`,
                false
              );

              this.imagesRelatedDataArr.push(imageRelatedData);
              idx++;
            });

            // Checking Local Storage Savings
            for(let imageRelatedDataObj of this.imagesRelatedDataArr) {
              if(localStorage.getItem(imageRelatedDataObj.imageSource)) {
                imageRelatedDataObj.likesNum = Number(localStorage.getItem(imageRelatedDataObj.imageSource));
              } 
              if(localStorage.getItem(imageRelatedDataObj.selfID)) {
                // imageRelatedDataObj.isImageClicked = true;
                imageRelatedDataObj.isImageClicked = Boolean(localStorage.getItem(imageRelatedDataObj.selfID));
              }
            }

            let authorsNamesArr: string[] = [];
            for(let obj of this.imagesRelatedDataArr) {
              if(!authorsNamesArr.includes(obj.authorName)) {
                authorsNamesArr.push(obj.authorName);   
              }
            }
            //console.log(authorsNamesArr);

            let authorsDataArr: any[] = [];
            for(let i: number = 0; i < authorsNamesArr.length; i++) {
              let authorName = authorsNamesArr[i];

              this.authorDataObj.name = authorName;
              this.authorDataObj.id = i+1;
              this.authorDataObj.profilePicURL = `Profile Picture URL Of ${authorName}`;
              this.authorDataObj.facebookProfileURL = `Facebook Profile URL Of ${authorName}`;
              this.authorDataObj.description = `
                Description about the author whose name is ${authorName}`;

              authorsDataArr.push(this.authorDataObj);
              this.authorDataObj = {};
            }

            //Set each author id to this.imagesRelatedDataArr
            for(let i: number = 0; i < this.imagesRelatedDataArr.length; i++) {
              for(let j: number = 0; j < authorsDataArr.length; j++) {
                if(this.imagesRelatedDataArr[i].authorName === authorsDataArr[j].name) {
                  this.imagesRelatedDataArr[i].authorID = authorsDataArr[j].id;
                  continue;
                }
              }
            }
            
          });   
      })
      .catch(error => {
        console.log(error);
      });
  }


  getImagesRelatedDataArr(): ImageRelatedData[] {
    this.fillImagesRelatedDataArr();
    //console.log(this.imagesRelatedDataArr);

    return this.imagesRelatedDataArr;
  }


  getAuthorsNamesArr() {
    this.getImagesRelatedDataArr();

    for(let obj of this.imagesRelatedDataArr) {
      if(!this.authorsNamesArr.includes(obj.authorName)) {
        this.authorsNamesArr.push(obj.authorName);
      }
    }
    return this.authorsNamesArr;
  }


  onAuthorImagesComponentImageClick(autorImagesComponent, i) {
    autorImagesComponent.instushService.authorImagesRelatedDataArr[i].isImageClicked = true;
    localStorage.setItem(autorImagesComponent.instushService.imagesRelatedDataArr[i].selfID, 'true');   
  }

  onMainPageComponentImageClick(mainPageComponent, i) {
    mainPageComponent.instushService.imagesRelatedDataArr[i].isImageClicked = true;
    localStorage.setItem(mainPageComponent.instushService.imagesRelatedDataArr[i].selfID, 'true');   
  }


  getAuthorsDataArr() {
    this.getAuthorsNamesArr();

    for(let i: number = 0; i < this.authorsNamesArr.length; i++) {
      let authorName = this.authorsNamesArr[i];

      this.authorDataObj.name = authorName;
      this.authorDataObj.id = i+1;
      this.authorDataObj.profilePicURL = `Profile Picture URL Of ${authorName}`;
      this.authorDataObj.facebookProfileURL = `Facebook Profile URL Of ${authorName}`;
      this.authorDataObj.description = `
        Description about the author whose name is ${authorName}`;

      this.authorsDataArr.push(this.authorDataObj);
      this.authorDataObj = {};
    }
  
    return this.authorsDataArr;
  }


  getAuthorImagesRelatedDataArr(clickedAuthorName) {
    this.clickedAuthorName = clickedAuthorName;

    for(let imageRelatedDataObj of this.imagesRelatedDataArr) {
      if(imageRelatedDataObj.authorName === clickedAuthorName) {
        this.authorImagesRelatedDataArr.push(imageRelatedDataObj);  
      }
    }

    return this.authorImagesRelatedDataArr;
  }


  getAuthorDataObj(clickedAuthorName): object {
    this.authorDataObj = {};
    this.getAuthorImagesRelatedDataArr(clickedAuthorName);
    this.getAuthorsDataArr();

    for(let i: number = 0; i < this.authorsDataArr.length; i++) {
      if(this.authorsDataArr[i].name === clickedAuthorName) {
        this.authorDataObj.name = clickedAuthorName;
        this.authorDataObj.id = this.authorsDataArr[i].id;

        console.log(this.authorDataObj);
        return this.authorDataObj;
      }  
    }
  
  }

  getCurrentAuthorID(clickedAuthorID): number {
    this.currentAuthorID = clickedAuthorID;
    return this.currentAuthorID;
  }

  getCurrentAuthorName(clickedAuthorName): string {
    this.authorDataObj.name = clickedAuthorName;
    return this.authorDataObj.name;
  }


  onLoadAuthorDetailsComponent(authorImagesComponent) {
    let authorName = authorImagesComponent.authorName;
   
    for(let obj of this.authorsDataArr) {
      if(obj.name === authorName) {
        this.authorDataObj = obj;
      }  
    }

    this.router.navigate(['/authorDetails', this.authorDataObj.id]);
  }

}



//localStorage.clear();