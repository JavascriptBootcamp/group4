import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfLikeComponent } from './number-of-like.component';

describe('NumberOfLikeComponent', () => {
  let component: NumberOfLikeComponent;
  let fixture: ComponentFixture<NumberOfLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
