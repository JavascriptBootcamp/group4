import { Component } from '@angular/core';

export class Img {
  like: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instush';
  condition: boolean;
  images: Img[]=[];
  imgSrcShow:string;
  conditionSohwImg:boolean;
  constructor() {
    this.condition= false;
    this.conditionSohwImg = false;
    this.imgSrcShow="";

this.images = JSON.parse(localStorage.getItem("images"));
    if (this.images==null) {
     
      this.images = [{ like: 0, image: "https://www.edreams.com/images/landingpages/vacation/640x480/london_640x480.jpg" },
      { like: 0, image: "http://london.eazycity.com/media/gallery/image/l/o/london_city1.jpg" }
        , { like: 0, image: "https://magazine.northeast.aaa.com/wp-content/uploads/2019/01/2019_TRA_GettyImages_853177728_London.jpg" }
        , { like: 0, image: "https://www.cisabroad.com/wp-content/uploads/2016/10/6376773707_323520b2d2_b-640x480.jpg" }
        , { like: 0, image: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_640_h_480_c_fill_g_auto_q_auto:good_f_jpg/v1444998622/London.jpg" }
        , { like: 0, image: "https://img.etimg.com/photo/60060406/london-big-ben2_reuters.jpg" }];

    }
  }

  addToLocal(){
    localStorage.setItem("images", JSON.stringify(this.images));
  }

  showImg(imgSrc:string){
    this.conditionSohwImg=true;
    this.imgSrcShow=imgSrc;
    
  }

  closeImg(){
    this.conditionSohwImg=false;
  }

}
