import { Component, OnInit } from '@angular/core';
import { Books } from './books'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer11-p1-m6';
  favoritesBooks: Books[]=[];
  
  ngOnInit() {
    this.favoritesBooks.push({
      title: 'המוסד השמיימי',
      authors: ['אייזק אסימוב'],
      publishedDate: 1951,
      publishers: ['עם עובד'],
      pageCount: 300,
      comments: '>אולי זה קצת קלישאתי, אבל הספר הזה, שיצא בשנת 1951 ותורגם לעברית בשנת 1978 הצית לבבות של מיליוני קוראים ברחבי העולם, ועורר תהייה לגבי גלקסיות רחוקות הרבה לפני מלחמת הכוכבים'
    });
    this.favoritesBooks.push({
      title: 'המוסד השמיימי',
      authors: ['אייזק אסימוב'],
      publishedDate: 1951,
      publishers: ['עם עובד'],
      pageCount: 300,
      comments: '>אולי זה קצת קלישאתי, אבל הספר הזה, שיצא בשנת 1951 ותורגם לעברית בשנת 1978 הצית לבבות של מיליוני קוראים ברחבי העולם, ועורר תהייה לגבי גלקסיות רחוקות הרבה לפני מלחמת הכוכבים'
    });
    this.favoritesBooks.push({
      title: 'המוסד השמיימי',
      authors: ['אייזק אסימוב'],
      publishedDate: 1951,
      publishers: ['עם עובד'],
      pageCount: 300,
      comments: '>אולי זה קצת קלישאתי, אבל הספר הזה, שיצא בשנת 1951 ותורגם לעברית בשנת 1978 הצית לבבות של מיליוני קוראים ברחבי העולם, ועורר תהייה לגבי גלקסיות רחוקות הרבה לפני מלחמת הכוכבים'
    });
    this.favoritesBooks.push({
      title: 'המוסד השמיימי',
      authors: ['אייזק אסימוב'],
      publishedDate: 1951,
      publishers: ['עם עובד'],
      pageCount: 300,
      comments: '>אולי זה קצת קלישאתי, אבל הספר הזה, שיצא בשנת 1951 ותורגם לעברית בשנת 1978 הצית לבבות של מיליוני קוראים ברחבי העולם, ועורר תהייה לגבי גלקסיות רחוקות הרבה לפני מלחמת הכוכבים'
    });
    this.favoritesBooks.push({
      title: 'המוסד השמיימי',
      authors: ['אייזק אסימוב'],
      publishedDate: 1951,
      publishers: ['עם עובד'],
      pageCount: 300,
      comments: '>אולי זה קצת קלישאתי, אבל הספר הזה, שיצא בשנת 1951 ותורגם לעברית בשנת 1978 הצית לבבות של מיליוני קוראים ברחבי העולם, ועורר תהייה לגבי גלקסיות רחוקות הרבה לפני מלחמת הכוכבים'
    })
  }
}
