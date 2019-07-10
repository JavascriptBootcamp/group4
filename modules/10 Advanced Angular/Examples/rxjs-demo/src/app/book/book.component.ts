import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  private id: number;
  private subscriber: Subscription;
  constructor(private route:ActivatedRoute ) { }

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        setInterval( () => console.warn("Still working..."), 1000 );
      } 
    );
  }

  ngOnDestroy() {
    // this.subscriber.unsubscribe();
  }

}
