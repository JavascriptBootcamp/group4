import { Injectable } from '@angular/core';
import { Place } from "../modules/place.interface";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  data: Place[];

  constructor() {
    this.data = [{
      name: "Germany",
      info_url: "https://en.wikipedia.org/wiki/Germany",
      img_url: "https://cdn.cnn.com/cnnnext/dam/assets/170706112840-germany.jpg"
    },
    {
      name: "Cyprus",
      info_url: "https://en.wikipedia.org/wiki/Cyprus",
      img_url: "https://i.dailymail.co.uk/i/pix/2017/07/31/13/42D92AC900000578-4746442-image-a-31_1501505843153.jpg"
    },
    {
      name: "Crete",
      info_url: "https://en.wikipedia.org/wiki/Crete",
      img_url: "https://media.timeout.com/images/105237820/image.jpg"
    },
    {
      name: "Portugal",
      info_url: "https://en.wikipedia.org/wiki/Portugal",
      img_url: "http://www.barcelo.com/en-us/images/destination-portugal_tcm21-136363.jpg"
    },
    {
      name: "Brazil",
      info_url: "https://en.wikipedia.org/wiki/Brazil",
      img_url: "https://www.pandotrip.com/wp-content/uploads/2016/02/Rio3-1-980x699.jpg"
    },
    {
      name: "Argentina",
      info_url: "https://en.wikipedia.org/wiki/Argentina",
      img_url: "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/01/argentina-panorama.jpg"
    },
    {
      name: "Bolivia",
      info_url: "https://en.wikipedia.org/wiki/Bolivia",
      img_url: "https://blog.enbus.com.bo/wp-content/uploads/2017/11/Solar_de_Uyuni_1050x700.jpg"
    },
    {
      name: "Peru",
      info_url: "https://en.wikipedia.org/wiki/Peru",
      img_url: "https://tourthetropics.com/wp-content/uploads/2017/01/MachuPicchu-1-17.jpg"
    },
    {
      name: "Thailand",
      info_url: "https://en.wikipedia.org/wiki/Thailand",
      img_url: "https://cdn.holidayguru.ie/wp-content/uploads/2017/11/long-boat-and-rocks-on-railay-beach-in-Krabi-Thailand-shutterstock_125319602-2.jpg"
    },
    {
      name: "Philippines",
      info_url: "https://en.wikipedia.org/wiki/Philippines",
      img_url: "https://i.ytimg.com/vi/9EzOdNCc_t8/maxresdefault.jpg"
    }];

  }

  getData(): Place[] {
    return this.data;
  }
}
