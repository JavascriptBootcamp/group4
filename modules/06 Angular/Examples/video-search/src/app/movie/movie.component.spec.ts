import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieComponent } from './movie.component';
import { ActorService } from '../actor.service';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service';

fdescribe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let actorService: ActorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ MovieComponent ],
      providers: [ActorService,MovieService,FavoritesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;

    component.movie = {
      Poster: "1",
      imdbID: "2",
      Title: "3",
      Search: []
    }

    actorService = TestBed.get(ActorService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When showing actor details', () => {
    it('Then it should get actor details from actor service', () => {
      let spy = spyOn(actorService, 'getActorDetails').and.callThrough();
      component.showActorDetails("Moshiko is the king");
      expect(spy).toHaveBeenCalledWith("Moshiko is the king")
    })
  })
});
