import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { rootUrl } from '../endpoint';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../logger.service';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';
import { logTypes } from '../logTypes.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    .active {
      border: solid 5px green;
    }
  `],
  // providers: [LoggerService]
  // styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  // @Output('favoritesEventAlias') favoritesEvent = new EventEmitter<Movie>();
  endpoint: string;
  movieDetails: string[];
  condition: boolean;
  isClicked: boolean;
  activatedRoute: ActivatedRoute;

  constructor(
    activatedRoute: ActivatedRoute,
    private loggerService:LoggerService,
    private movieService: MovieService,
    private favoritesService: FavoritesService
    ) {
    this.endpoint = rootUrl;
    this.movieDetails = [];
    this.condition = true;
    this.isClicked = false;
    this.activatedRoute = activatedRoute;
    // this.loggerService.setLogType(logTypes.ERROR);
  }

  ngOnInit() {
    if (!this.movie) {
      this.setMovie(this.activatedRoute.snapshot.params.movieId);
    }
  }

  setMovie(id: string) {
    this.movieService.loadMovie(id)
      .then(data => this.movie = data)
  }

  showDetails(id: string) {
    // const url = `${this.endpoint}&i=${id}`;
    // this.loggerService.log(`fetching movie from url: ${url}`);
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => this.setData(data));

    // this.loggerService.log(JSON.stringify(this.loggerService.getMessages()));
    this.movieService.loadMovie(id)
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
    // this.favoritesEvent.emit(this.movie);
    this.favoritesService.toggleFavorite(this.movie);
    this.isClicked = !this.isClicked;
  }

  width = this.getWidth();

  public getWidth() {
    return '333';
  }
}
