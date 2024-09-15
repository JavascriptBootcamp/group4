import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitHighScoreComponent } from './submit-high-score.component';

describe('SubmitHighScoreComponent', () => {
  let component: SubmitHighScoreComponent;
  let fixture: ComponentFixture<SubmitHighScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitHighScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitHighScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
