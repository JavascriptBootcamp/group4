import { Component } from '@angular/core';
import IPicture from './IPicture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictures: IPicture[];
  actors: IActor[];

  constructor() {
    this.pictures = [
      {
        name: 'Balos',
        wikiLink: 'https://de.wikipedia.org/wiki/Balos',
        source: 'http://www.orangesmile.com/extreme/img/main/balos-beach_2.jpg',
      },
      {
        name: 'Carpathian Mountains',
        source: 'http://blog.aquacarpatica.com/english/wp-content/uploads/2018/02/rsz_dsc09790_pr_a-min-960x500.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Carpathian_Mountains',
      },
      {
        name: 'Ko Phi Phi',
        source: 'https://pbs.twimg.com/media/BjaKVNvIMAA5X5l.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Ko_Phi_Phi_Le',
      },
      {
        name: 'Jerusalem',
        source: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/F2EB/production/_103878126_6eb47c91-bca4-425f-a351-b4c35c252e12.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Jerusalem',
      },
      {
        name: 'Bangkok',
        source: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/pagePropertiesOgImage/bangkok.jpg.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Bangkok',
      },
      {
        name: 'Burgas',
        source: 'https://cdn.tuifly.be/img/static/im1000/13600/13601/13601K.JPG',
        wikiLink: 'https://en.wikipedia.org/wiki/Burgas',
      },
      {
        name: 'Athens',
        source: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Greece/Athens/Athens%20lead-xlarge.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Athens',
      },
      {
        name: 'Mount Hermon',
        source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Hermonsnow.jpg/270px-Hermonsnow.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Mount_Hermon',
      },
      {
        name: 'Bucharest',
        source: 'https://romaniatourstore.com/wp-content/uploads/2016/03/Bucharest-evening-tour.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Bucharest',
      },
      {
        name: 'Nahal',
        source: 'http://www.maslulim-israel.co.il/files/tracks/nahalshilotanah_tmuna.jpg',
        wikiLink: 'https://he.wikipedia.org/wiki/%D7%94%D7%A9%D7%95%D7%9E%D7%A8%D7%95%D7%9F',
      }
    ];

    this.actors = [
      {
        name: 'Morgan Friman',
        imdbLink: 'https://www.imdb.com/name/nm0000151/',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      },
      {
        name: 'Will Smith',
        imdbLink: 'https://www.imdb.com/name/nm0000226/',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg',
      },
      {
        name: 'Gerard Butler',
        imdbLink: 'https://www.imdb.com/name/nm0124930/',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMjE4NDMwMzc4Ml5BMl5BanBnXkFtZTcwMDg4Nzg4Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg',
      },
      {
        name: 'Matt Damon',
        imdbLink: 'https://www.imdb.com/name/nm0000354/',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_UY317_CR11,0,214,317_AL_.jpg',
      },
      {
        name: 'Samuel L. Jackson',
        imdbLink: 'https://www.imdb.com/name/nm0000168/',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
      },
    ]

  }
}
