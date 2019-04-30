import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuizResultsComponent } from './display-quiz-results.component';

describe('DisplayQuizResultsComponent', () => {
  let component: DisplayQuizResultsComponent;
  let fixture: ComponentFixture<DisplayQuizResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuizResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
