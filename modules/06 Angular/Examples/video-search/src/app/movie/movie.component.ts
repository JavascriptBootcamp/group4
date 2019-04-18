import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { rootUrl } from '../endpoint';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    .active {
      border: solid 5px green;
    }
  `]
  // styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output('favoritesEventAlias') favoritesEvent = new EventEmitter<Movie>();
  endpoint: string;
  movieDetails: string[];
  condition: boolean;
  isClicked: boolean;
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.endpoint = rootUrl;
    this.movieDetails = [];
    this.condition = true;
    this.isClicked = false;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    if (!this.movie) {
      this.setMovie(this.activatedRoute.snapshot.params.movieId);
    }
  }

  setMovie(id: string) {
    fetch(`${this.endpoint}&i=${id}`)
      .then(response => response.json())
      .then(data => this.movie = data)
  }

  showDetails(id: string) {
    fetch(`${this.endpoint}&i=${id}`)
      .then(response => response.json())
      .then(data => this.setData(data))
  }

  setData(data: object) {
    for (let detail in data) {
      if (detail === "Ratings") {
        this.addRatings(data[detail]);
      }
      else {
        this.movieDetails.push(`${detail}: ${data[detail]}`)
      }
    }
  }

  addRatings(ratings) {
    ratings.map(rating => this.movieDetails.push(`${rating.Source}: ${rating.Value}`));
  }

  onFavoritesClick() {
    this.favoritesEvent.emit(this.movie);
    this.isClicked = !this.isClicked;
  }

  width = this.getWidth();

  public getWidth() {
    return '333';
  }
}
